import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListDealsByDateUseCase } from './ListDealsByDateUseCase';

class ListDealsByDateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listDealsByDateUseCases = container.resolve(ListDealsByDateUseCase)
    const deals = await listDealsByDateUseCases.execute();
    return response.json(deals);
  }
}

export { ListDealsByDateController }