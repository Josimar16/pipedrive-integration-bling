import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateReportUseCase } from './CreateReportUseCase';

class CreateReportController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.params

    const createReportUseCase = container.resolve(CreateReportUseCase);

    const report = await createReportUseCase.execute(new Date(date));

    return response.status(201).send(report);
  }
}

export { CreateReportController }