import { Router } from 'express';
import { CreateDealController } from '../../../useCases/createDeal/CreateDealController';
import { ListDealsByDateController } from '../../../useCases/listDealsByDate/ListDealsByDateController';

const dealsRoutes = Router();

const createDealController = new CreateDealController();
const listDealsByDateController = new ListDealsByDateController();

dealsRoutes.post('/', createDealController.handle);

dealsRoutes.get('/', listDealsByDateController.handle);

export { dealsRoutes };
