import { Router } from 'express';
import { CreateReportController } from '../../../useCases/createReport/CreateReportController';
import { ListReportsByDateController } from '../../../useCases/listReportsByDate/ListReportsByDateController';

const reportsRoutes = Router();

const createReportController = new CreateReportController();
const listReportsByDateController = new ListReportsByDateController();

reportsRoutes.post('/', createReportController.handle);

reportsRoutes.get('/', listReportsByDateController.handle);

export { reportsRoutes };
