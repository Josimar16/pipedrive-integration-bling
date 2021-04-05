interface IDeal {
  clientName: string,
  code: number,
  description: string,
  value: number
}
interface IResponse {
  retorno: {
    pedidos: [
      {
        pedido: {
          numero: string,
          idPedido: number
        }
      }
    ],
    erros: [
      {
        erro: {
          cod: 29 | 30 | 31 | 32 | 34,
          msg: string
        }
      }
    ]
  }
}

interface IFinancesProvider {
  create(data: IDeal): Promise<void>;
  parseDealToXML(data: IDeal): IResponse;
}

export { IDeal, IResponse, IFinancesProvider }