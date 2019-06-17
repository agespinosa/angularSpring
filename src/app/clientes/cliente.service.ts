import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Injectable()
export class ClienteService {

  constructor() { }

  public getClientes(): Cliente[]{
    return CLIENTES;
  }
}
