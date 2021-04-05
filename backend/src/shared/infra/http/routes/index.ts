import { Router } from 'express';
import { dealsRoutes } from '../../../../modules/deals/infra/http/routes/deals.routes';
import { reportsRoutes } from '../../../../modules/deals/infra/http/routes/reports.routes';

const router = Router();

router.use('/deals', dealsRoutes);
router.use('/reports', reportsRoutes);

export { router }