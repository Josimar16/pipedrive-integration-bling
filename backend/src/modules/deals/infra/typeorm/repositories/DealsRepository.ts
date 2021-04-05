import { getMongoRepository, MongoRepository } from 'typeorm';
import { Deal } from '../schemas/Deal';
import { IDealsRepository, ICreateDealDTO } from '../../../repositories/IDealsRepository';

class DealsRepository implements IDealsRepository {
  private repository: MongoRepository<Deal>;

  constructor() {
    this.repository = getMongoRepository(Deal);
  }

  public async create({ title, amount, date }: ICreateDealDTO): Promise<Deal> {
    const deal = this.repository.create({ title, amount, date });

    const dealCreated = await this.repository.save(deal);

    return dealCreated;
  }

  public async list(): Promise<Deal[]> {
    return await this.repository.find();
  }

  public async findByTitleAndDate(title: string, date: Date): Promise<Deal> {
    return await this.repository.findOne({ title, date });
  }

  public async findByDate(date: Date): Promise<Deal[]> {
    const deals = await this.repository.find({ where: { date } });
    return deals;
  }
}

export { DealsRepository };