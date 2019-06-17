import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string[] = ['typeScript', 'JavaScript', 'JAva SE', 'C#', 'PHP'];

  habilitar: boolean = true;
  constructor() { }

  setHabiliar(): boolean {
    return this.habilitar = (this.habilitar == true) ? false : true;
  }

}
