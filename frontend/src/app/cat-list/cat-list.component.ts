import { Component, OnInit } from '@angular/core';
import { CatService} from '../services/cat.service';
import { Cat } from '../types/cat';
import * as _ from 'lodash';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  selectedCat: Cat;
  CatsList: Cat[];

  constructor( private catService: CatService ) { }

  getAllCats(){
    return this.catService.readAllCat().subscribe((list: Cat[]) => {
      return this.CatsList = list;
    })
  }
  deleteCat(id){
    return this.catService.deleteCat(id).subscribe( r =>  {
      _.remove(this.CatsList, {  _id: id});
      return r;
    })
  }

  setSelectedCat(cat: Cat){
    this.selectedCat = cat;
  }

  ngOnInit(): void {
    this.getAllCats();
  }

}
