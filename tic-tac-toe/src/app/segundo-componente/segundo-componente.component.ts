import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.scss']
})
export class SegundoComponenteComponent implements OnInit {
  arrNumeros = ["caua", "teixeira", "de", "carvalho"]
  constructor() { }

  ngOnInit() {
  }

}
