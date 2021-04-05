interface IDeal {
  id: number,
  title: string,
  person_name: string,
  value: number,
  currency: string,
  update_time: string,
  status: String
}

interface IOpportunityProvider {
  listByStatusWon(): Promise<IDeal[]>;
}

export { IOpportunityProvider, IDeal }