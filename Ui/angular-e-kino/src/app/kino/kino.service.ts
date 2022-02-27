import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { kinoCreateModel, kinoDTO } from './kino-forma/kino-model';

@Injectable({
  providedIn: 'root'
})
export class KinoService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL+'/kina';

  public get(): Observable<kinoDTO[]>{
    return this.http.get<kinoDTO[]>(this.apiURL);
  }

  public getById(id: number): Observable<kinoDTO>{
    return this.http.get<kinoDTO>(`${this.apiURL}/${id}`);
  }

  public create(kinoCreateModel: kinoCreateModel)
  {
    return this.http.post(this.apiURL,kinoCreateModel);
  }
  public edit(id: number, kinoDTO: kinoCreateModel){
    return this.http.put(`${this.apiURL}/${id}`, kinoDTO);
  }
  public delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
