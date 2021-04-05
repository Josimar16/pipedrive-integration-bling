import { inject, injectable } from 'tsyringe';
import { IDealsRepository } from '../../repositories/IDealsRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { IOpportunityProvider } from '../../../../shared/container/providers/OpportunityProvider/models/IOpportunityProvider';
import { IFinancesProvider } from '../../../../shared/container/providers/FinancesProvider/models/IFinancesProvider';
import { format } from 'date-fns';

@injectable()
class CreateDealUseCase {
  constructor(
    @inject('DealsRepository')
    private dealsRepository: IDealsRepository,

    @inject('OpportunityProvider')
    private opportunityProvider: IOpportunityProvider,

    @inject('FinancesProvider')
    private financesProvider: IFinancesProvider
  ) { }

  public async execute(): Promise<void> {
    const deals = await this.opportunityProvider.listByStatusWon();

    if (!deals) {
      throw new AppError('Não existe deals marcados com esse status', 204)
    }

    deals.forEach(async (deal) => {
      const dateFormatted = new Date(format(new Date(deal.update_time), 'yyyy-MM-dd'))
      const dealAlreadyExists = await this.dealsRepository.findByTitleAndDate(deal.title, dateFormatted);
      if (!dealAlreadyExists) {
        await this.financesProvider.create({
          clientName: deal.person_name,
          code: deal.id,
          description: deal.title,
          value: deal.value,
        });
        await this.dealsRepository.create({
          title: deal.title,
          amount: deal.value,
          date: dateFormatted,
        });
      }
    })
    return;
  };
}

export { CreateDealUseCase };
