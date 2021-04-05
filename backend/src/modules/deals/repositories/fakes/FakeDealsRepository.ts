import { Deal } from "../../infra/typeorm/schemas/Deal";
import { ICreateDealDTO, IDealsRepository } from "../IDealsRepository";

class FakeDealsRepository implements IDealsRepository {
  private deals: Deal[] = [];

  public async findByTitleAndDate(title: string, date: Date): Promise<Deal> {
    const deal = this.deals.find((deal) => deal.title === title && deal.date === date);
    return deal;
  }

  public async findByDate(date: Date): Promise<Deal[]> {
    const deals = this.deals.filter((deal) => deal.date === date);
    return deals;
  }

  public async list(): Promise<any[]> {
    const deals = this.deals;

    return deals;
  }

  public async create({ title, date, amount }: ICreateDealDTO): Promise<Deal> {
    const deal = new Deal();

    Object.assign(deal, {
      title,
      date,
      amount
    });

    this.deals.push(deal);

    return deal;
  }

}

export { FakeDealsRepository }