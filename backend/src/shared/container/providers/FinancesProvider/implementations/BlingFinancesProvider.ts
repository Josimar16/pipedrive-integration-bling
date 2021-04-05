import axios from 'axios';
import { toXML } from 'jstoxml';
import { AppError } from '../../../../errors/AppError';
import { IDeal, IFinancesProvider, IResponse } from "../models/IFinancesProvider";

class BlingFinancesProvider implements IFinancesProvider {
  private client: any;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.BLING_URL || '',
      timeout: 10000
    })
  }

  public async create({
    clientName,
    code,
    description,
    value
  }: IDeal): Promise<void> {
    const xml = this.parseDealToXML({
      clientName,
      code,
      description,
      value
    });

    const { data, status } = await this.client.post('/', {
      params: {
        apiKey: process.env.BLING_KEY,
        xml
      }
    })

    if (data.retorno.erros && data.retorno.erros.lenght) {
      throw new AppError(data.retorno.erros[0].erro.msg);
    }

    if (status <= 199 || status >= 300) {
      throw new AppError('Ocorreu um erro ao tentar criar um pedido na API do Bling', 500);
    }

    return;
  }
  public parseDealToXML({
    clientName,
    code,
    description,
    value
  }: IDeal): IResponse {
    return toXML({
      pedido: {
        cliente: {
          nome: clientName
        },
        itens: {
          item: {
            codigo: code,
            descricao: description,
            valor_unitario: value,
            quantidade: "1"
          }
        }
      }
    });
  }

}

export { BlingFinancesProvider };