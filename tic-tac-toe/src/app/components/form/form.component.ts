import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms"


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  data:any;
  perfil = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    dataNascimento: new FormControl(''),
    nomeMae: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }
  obter(){
    this.data = this.perfil.value
  }
  }
