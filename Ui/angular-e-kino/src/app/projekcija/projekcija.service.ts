import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { projekcijaCreateDTO, projekcijaDTO } from './projekcija-model';

@Injectable({
  providedIn: 'root'
})
export class ProjekcijaService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL+'/projekcije';

  
  getAll(): Observable<projekcijaDTO[]>
  {
    return this.http.get<projekcijaDTO[]>(this.apiURL);
  }

 getById(id:number):Observable<projekcijaDTO>
 {
   return this.http.get<projekcijaDTO>(`${this.apiURL}/${id}`);
 }


  create(projekcija: projekcijaCreateDTO){
    return this.http.post(this.apiURL,projekcija)
  }

  edit(id:number,projekcija:projekcijaCreateDTO)
  {
    return this.http.put((`${this.apiURL}/${id}`),projekcija);
  }


  delete(id:number)
  {
    return this.http.delete(`${this.apiURL}/${id}`);

  }

  
}
