import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    HttpClientModule
  ]
})
export class MainModule { }
