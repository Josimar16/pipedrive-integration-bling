import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {

  public async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCases = container.resolve(ListSpecificationsUseCase);

    const specifications = await listSpecificationsUseCases.execute();
    return response.json(specifications);
  }
}

export { ListSpecificationsController }