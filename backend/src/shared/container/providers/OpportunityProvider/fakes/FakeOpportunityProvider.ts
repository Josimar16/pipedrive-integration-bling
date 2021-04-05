import { IDeal, IOpportunityProvider } from "../models/IOpportunityProvider";

class FakeOpportunityProvider implements IOpportunityProvider {
  private deals: IDeal[] = [];

  public async listByStatusWon(): Promise<IDeal[]> {
    return this.deals;
  }
}

export { FakeOpportunityProvider }