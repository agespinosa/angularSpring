import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente:Cliente = new Cliente();

  constructor( private clienteService:ClienteService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();

  }

  public create(): void{
   
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        swal("Nuevo Cliente:", `cliente ${cliente.nombre} se ha creado con éxito`, 'success' );
      }
    );
  }

  public cargarCliente():void{
    this.activatedRoute.params.subscribe(
      params => {
        let id= params['id'];
        if(id){
          this.clienteService.getCliente(id).subscribe(
            result=>{
              this.cliente= result;
            }
          );
        }
      }
    );
  }
}
