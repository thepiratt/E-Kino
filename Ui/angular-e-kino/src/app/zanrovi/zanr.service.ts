import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from'src/environments/environment'
import { Observable } from 'rxjs';
import{zanrCreationDTO, zanrDTO} from './zanr.model'

@Injectable({
  providedIn: 'root'
})
export class ZanrService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL+'/zanrovi';


  getAll(): Observable<zanrDTO[]>
  {
    return this.http.get<zanrDTO[]>(this.apiURL);
  }

 getById(id:number):Observable<zanrDTO>
 {
   return this.http.get<zanrDTO>(`${this.apiURL}/${id}`);
 }


  create(zanr: zanrCreationDTO){
    return this.http.post(this.apiURL,zanr)
  }

  edit(id:number,zanr:zanrCreationDTO)
  {
    return this.http.put((`${this.apiURL}/${id}`),zanr);
  }


  delete(id:number)
  {
    return this.http.delete(`${this.apiURL}/${id}`);

  }

}
