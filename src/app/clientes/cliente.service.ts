import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeader= new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente:Cliente): Observable<any>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeader}).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        swal(e.error.mensaje, e.error.error, "error");
        return throwError(e);
      })
    );
  }

  getCliente(id:string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(

      map((response: any) => response.cliente as Cliente),

      catchError(e => {
        this.router.navigate(['/clientes']);
        swal("No fue posible obtener el cliente", e.error.mensaje, "error");
        return throwError(e);
      })
    );
  }

  updateCliente(cliente:Cliente): Observable<any>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeader}).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        swal(e.error.mensaje, e.error.error, "error");
        return throwError(e);
      })
    );
  }

  deleteCliente(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeader}).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e => {
        this.router.navigate(['/clientes']);
        swal(e.error.mensaje, e.error.error, "error");
        return throwError(e);
      })
    );
  }
}
