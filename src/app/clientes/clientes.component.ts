import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

import swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
     this.clienteService.getClientes().subscribe(
       clientes => {
         this.clientes = clientes; }
     );
  }

  delete(cliente: Cliente):void{

    swal({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.value) {
        this.clienteService.deleteCliente(cliente.id).subscribe(
          response=>{
            this.clientes = this.clientes.filter(cli => cli!==cliente);
            swal(
              'Eliminado!',
              `El cliente ${cliente.nombre} ${cliente.apellido} fue eliminado con exito!`,
              'success'
            )
          }
        );
        
      }
    })

    
  }

}
