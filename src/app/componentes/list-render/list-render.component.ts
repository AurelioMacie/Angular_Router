import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Interface/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
 animals: Animal[]=[];


//tem que chamar/importar no constructor
  constructor(private listService: ListService) {
    this.getAnimals();
   }

  ngOnInit(): void {
  }

  //estamos a criar por agora um metodo remove que vai simular remocao no banco de dados
  removeAnimal(animal: Animal){

  }

  getAnimals(){
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  getAll(){

  }

}
