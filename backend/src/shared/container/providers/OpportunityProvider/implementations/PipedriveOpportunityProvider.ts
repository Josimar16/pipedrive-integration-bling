import axios from 'axios';
import { AppError } from '../../../../errors/AppError';
import { IOpportunityProvider, IDeal } from '../models/IOpportunityProvider';

class PipedriveOpportunityProvider implements IOpportunityProvider {
  private client: any;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.PIPEDRIVE_URL || '',
      timeout: 10000
    });
  }

  public async listByStatusWon(): Promise<IDeal[]> {
    const { data, status } = await this.client.get('deals', {
      params: {
        status: 'won',
        api_token: process.env.PIPEDRIVE_KEY
      }
    })

    if (status <= 199 || status >= 300) {
      throw new AppError('Ocorreu um erro ao tentar obter deals da API do Pipedrive');
    }

    if (!data.data) {
      return [];
    }

    const deals: IDeal[] = data.data.map((
      { id,
        title,
        person_name,
        value,
        currency,
        update_time,
        status,
      }: IDeal) => {
      return {
        id,
        title,
        person_name,
        value,
        currency,
        update_time,
        status
      }
    })
    return deals;
  }
}

export { PipedriveOpportunityProvider }