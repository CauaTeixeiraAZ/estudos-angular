import { Images } from './../../model/placeholder.model';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})

export class CrudComponent implements OnInit {
  images = new Images()
  erro: any
  constructor( private crudService: CrudService) {
    this.getter()
  }

  ngOnInit() {
  }

  getter(){
    this.crudService.getFotos().subscribe(
      (data: Images) =>{
        this.images = data
        console.log(this.images)
        console.log("data", data)
      }, error =>{
        this.erro = error
        console.log(this.erro)
      }
    )
  }
}
