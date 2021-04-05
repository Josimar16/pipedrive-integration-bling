import { container } from 'tsyringe';

import { IFinancesProvider } from './models/IFinancesProvider';
import { BlingFinancesProvider } from './implementations/BlingFinancesProvider';

const providers = {
  bling: container.resolve(BlingFinancesProvider)
}

container.registerInstance<IFinancesProvider>('FinancesProvider', providers.bling);