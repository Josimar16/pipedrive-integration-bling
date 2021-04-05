import { inject, injectable } from 'tsyringe';
import { Report } from '../../infra/typeorm/schemas/Report';
import { IReportsRepository } from '../../repositories/IReportsRepository';

@injectable()
class ListReportsByDateUseCase {
  constructor(
    @inject('ReportsRepository')
    private reportsRepository: IReportsRepository
  ) { }

  public async execute(date: Date): Promise<Report> {
    const reports = await this.reportsRepository.findByDate(date);

    return reports;
  }
}

export { ListReportsByDateUseCase }