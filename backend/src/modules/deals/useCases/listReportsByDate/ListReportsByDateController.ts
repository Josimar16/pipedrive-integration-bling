import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListReportsByDateUseCase } from './ListReportsByDateUseCase';

class ListReportsByDateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const date = request.query.date;

    const listReportsByDateUseCases = container.resolve(ListReportsByDateUseCase)
    const reports = await listReportsByDateUseCases.execute(new Date(date[0]));
    return response.json(reports);
  }
}

export { ListReportsByDateController }