import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatService } from '../services/cat.service'
import { Cat } from '../types/cat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-update',
  templateUrl: './cat-update.component.html',
  styleUrls: ['./cat-update.component.scss']
})
export class CatUpdateComponent implements OnInit {

  @Input()
  cat: Cat

  catForm: FormGroup;

  constructor( private fb: FormBuilder, private catService: CatService,  private router: Router) { }

  createCatForm() {
    this.catForm = this.fb.group({
      _id: [this.cat._id],
      name: [this.cat.name, Validators.required],
      age: [this.cat.age, Validators.required],
      breed: [this.cat.breed, Validators.required]
    })
  }

  ngOnInit(): void {
    this.createCatForm();
  }

  onSubmit(catDetails: Cat){
    this.catService.updateCat(catDetails).subscribe(r => r);
  }

}
