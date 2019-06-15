import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Bienvenido Angular ';

  curso: string = 'Curso de Spring 5 con angular 7';
  profesor: string = 'Andres Gusman';
}
