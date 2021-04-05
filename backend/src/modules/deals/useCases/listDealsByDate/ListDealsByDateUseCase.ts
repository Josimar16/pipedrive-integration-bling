import { inject, injectable } from 'tsyringe';
import { Deal } from '../../infra/typeorm/schemas/Deal';
import { IDealsRepository } from '../../repositories/IDealsRepository';

@injectable()
class ListDealsByDateUseCase {
  constructor(
    @inject('DealsRepository')
    private dealsRepository: IDealsRepository
  ) { }

  public async execute(): Promise<Deal[]> {
    const deals = await this.dealsRepository.list();
    return deals;
  }
}

export { ListDealsByDateUseCase }