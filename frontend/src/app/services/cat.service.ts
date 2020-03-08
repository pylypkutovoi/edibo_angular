import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cat } from '../types/cat'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private allCatUrl = 'http://localhost:3000/api/cats/v0/cat/readall';
  private DeleteCatUrl = 'http://localhost:3000/api/cats/v0/cat/delete';

  header = new HttpHeaders().set("Content-type", "application/json");
  constructor(private http: HttpClient) { }

  public readAllCat(): Observable<any>{

    return this.http.get(this.allCatUrl, {headers: this.header});
  }

  public deleteCat(id){
    return this.http.delete(`${this.DeleteCatUrl}/${id}`, {headers: this.header});
  }
}


