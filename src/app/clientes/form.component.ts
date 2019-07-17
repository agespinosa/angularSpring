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
      response => {
        this.router.navigate(['/clientes']);
        swal(`Nuevo Cliente:  ${response.cliente.nombre}`, `${response.mensaje} `, 'success' );
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
              console.log(result);
              this.cliente= result;
            }
          );
        }
      }
    );
  }

  public update():void{
    this.clienteService.updateCliente(this.cliente).subscribe(
      response=>{
        this.router.navigate(['/clientes']);
        swal(`El Cliente: ${response.cliente.nombre} `, `${response.mensaje}`, 'success' );
      }
    );
  }
}
