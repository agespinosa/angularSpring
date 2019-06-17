import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[] =
  [
    {id: 1, nombre: 'Gustavo', apellido: 'Espinosa', createdAt: '2019-06-17', email: 'gustavo@gmail.com'},
    {id: 2, nombre: 'Juan', apellido: 'Agostin', createdAt: '2019-06-17', email: 'juan@gmail.com'},
    {id: 3, nombre: 'Victor', apellido: 'Nardoni', createdAt: '2019-06-17', email: 'voctrr@gmail.com'},
    {id: 4, nombre: 'Rene', apellido: 'Recalde', createdAt: '2019-06-17', email: 'rene@gmail.com'},
    {id: 5, nombre: 'Andres', apellido: 'Brusutti', createdAt: '2019-06-17', email: 'andres@gmail.com'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
