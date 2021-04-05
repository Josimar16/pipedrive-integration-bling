import { Deal } from "../infra/typeorm/schemas/Deal";

interface ICreateDealDTO {
  title: string,
  amount: number,
  date: Date
}

interface IDealsRepository {
  findByTitleAndDate(title: string, date: Date): Promise<Deal>;
  findByDate(date: Date): Promise<Deal[]>;
  list(): Promise<Deal[]>;
  create(data: ICreateDealDTO): Promise<Deal>;
}

export { IDealsRepository, ICreateDealDTO }