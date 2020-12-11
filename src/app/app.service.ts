import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getCaracters(page=1){
    console.log(page)
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  }
}
