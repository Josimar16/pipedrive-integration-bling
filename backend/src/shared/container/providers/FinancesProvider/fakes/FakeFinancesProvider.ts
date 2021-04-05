import { IDeal, IFinancesProvider, IResponse } from "../models/IFinancesProvider";

class FakeFinancesProvider implements IFinancesProvider {
  private deal: IResponse

  public async create(data: IDeal): Promise<void> {
    this.parseDealToXML(data);
    return;
  }
  public parseDealToXML({ clientName, code, description, value }: IDeal): IResponse {
    return this.deal;
  }
}

export { FakeFinancesProvider }