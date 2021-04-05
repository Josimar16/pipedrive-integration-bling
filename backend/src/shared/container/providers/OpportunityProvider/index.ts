import { container } from 'tsyringe';

import { IOpportunityProvider } from './models/IOpportunityProvider';
import { PipedriveOpportunityProvider } from './implementations/PipedriveOpportunityProvider';

const providers = {
  pipedrive: container.resolve(PipedriveOpportunityProvider)
}

container.registerInstance<IOpportunityProvider>('OpportunityProvider', providers.pipedrive);