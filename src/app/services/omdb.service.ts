import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  api='http://www.omdbapi.com/?apikey=ffad4946';
  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url=`${this.api}${query}`;
    return this.http.get(url);
  }
}
