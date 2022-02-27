import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from'src/environments/environment'
import { Observable } from 'rxjs';
import{eventCreationDTO, eventDTO} from './event.model'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL+'/eventi';


  getAll(): Observable<eventDTO[]>
  {
    return this.http.get<eventDTO[]>(this.apiURL);
  }

 getById(id:number):Observable<eventDTO>
 {
   return this.http.get<eventDTO>(`${this.apiURL}/${id}`);
 }


  create(zanr: eventCreationDTO){
    return this.http.post(this.apiURL,zanr)
  }

  edit(id:number,zanr:eventCreationDTO)
  {
    return this.http.put((`${this.apiURL}/${id}`),zanr);
  }


  delete(id:number)
  {
    return this.http.delete(`${this.apiURL}/${id}`);

  }

}