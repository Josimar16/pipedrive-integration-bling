import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateDealUseCase } from './CreateDealUseCase';

class CreateDealController {
  public async handle(request: Request, response: Response): Promise<Response> {

    const createDealUseCase = container.resolve(CreateDealUseCase);

    await createDealUseCase.execute();

    return response.status(201).send();
  }
}

export { CreateDealController }