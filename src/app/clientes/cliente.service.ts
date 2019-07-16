import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeader= new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeader});
  }

  getCliente(id:string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }
}
