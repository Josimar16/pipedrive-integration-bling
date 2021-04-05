import { getMongoRepository, MongoRepository } from 'typeorm';
import { Report } from '../schemas/Report';
import { IReportsRepository } from '../../../repositories/IReportsRepository';

class ReportsRepository implements IReportsRepository {
  private repository: MongoRepository<Report>;

  constructor() {
    this.repository = getMongoRepository(Report);
  }

  public async create(count: number, date: Date): Promise<Report> {
    const report = this.repository.create({ count, date });

    const reportCreated = await this.repository.save(report);

    return reportCreated;
  }

  async findByDate(date: Date): Promise<Report> {
    return await this.repository.findOne({ date });
  }
}

export { ReportsRepository };