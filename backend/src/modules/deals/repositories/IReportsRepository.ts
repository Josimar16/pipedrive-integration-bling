import { Report } from "../infra/typeorm/schemas/Report";

interface IReportsRepository {
  findByDate(date: Date): Promise<Report>;
  create(count: number, date: Date): Promise<Report>;
}

export { IReportsRepository }