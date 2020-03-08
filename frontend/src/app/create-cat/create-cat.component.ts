import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cat } from '../types/cat';
import { CatService } from '../services/cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.scss']
})
export class CreateCatComponent implements OnInit {

  catForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private catService: CatService,
    private router: Router) { }

  createCatForm() {
    this.catForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      breed: ['', Validators.required]
    })
  }


  ngOnInit(): void {
    this.createCatForm();
  }

  onSubmit(catDetails: Cat){
    this.catService.createCat(catDetails).subscribe(r => {
      this.router.navigate(['/catlist']);
      return r;
    });
  }

}
