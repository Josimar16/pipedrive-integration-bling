import { Report } from "../../infra/typeorm/schemas/Report";
import { IReportsRepository } from "../IReportsRepository";

class FakeReportsRepository implements IReportsRepository {
  private reports: Report[] = [];

  async findByDate(date: Date): Promise<Report> {
    const report = this.reports.find((report) => report.date === date);
    return report;
  }

  async create(count: number, date: Date): Promise<Report> {
    const report = new Report();

    Object.assign(report, {
      count,
      date
    });

    this.reports.push(report);

    return report;
  }

}

export { FakeReportsRepository }