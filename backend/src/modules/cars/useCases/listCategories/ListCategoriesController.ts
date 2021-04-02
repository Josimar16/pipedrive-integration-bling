import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {

  public async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCases = container.resolve(ListCategoriesUseCase)
    const categories = await listCategoriesUseCases.execute();
    return response.json(categories);
  }
}

export { ListCategoriesController }