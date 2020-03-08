import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CreateCatComponent } from './create-cat/create-cat.component';



const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'catlist', component: CatListComponent },
  { path: 'createcat', component: CreateCatComponent },
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'main', loadChildren: () => import('./main/main.module').then( m => m.MainModule)},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
