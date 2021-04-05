import { inject, injectable } from 'tsyringe';
import { IReportsRepository } from '../../repositories/IReportsRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { IDealsRepository } from '../../repositories/IDealsRepository';
import { Report } from '../../infra/typeorm/schemas/Report';

@injectable()
class CreateReportUseCase {
  constructor(
    @inject('ReportsRepository')
    private reportsRepository: IReportsRepository,

    @inject('DealsRepository')
    private dealsRepository: IDealsRepository,
  ) { }

  public async execute(date: Date): Promise<Report> {
    const deals = await this.dealsRepository.findByDate(date);
    let count: number = 0;
    for (let index = 0; index < deals.length; index++) {
      count += deals[index].amount;
    }
    const report = await this.reportsRepository.create(count, date);

    return report;
  };
}

export { CreateReportUseCase };
