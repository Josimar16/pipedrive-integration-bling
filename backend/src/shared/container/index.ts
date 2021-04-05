import { container } from 'tsyringe';
import './providers';

import { DealsRepository } from '../../modules/deals/infra/typeorm/repositories/DealsRepository';
import { IDealsRepository } from '../../modules/deals/repositories/IDealsRepository';

import { ReportsRepository } from '../../modules/deals/infra/typeorm/repositories/ReportsRepository';
import { IReportsRepository } from '../../modules/deals/repositories/IReportsRepository';


container.registerSingleton<IDealsRepository>('DealsRepository', DealsRepository);

container.registerSingleton<IReportsRepository>('ReportsRepository', ReportsRepository);
