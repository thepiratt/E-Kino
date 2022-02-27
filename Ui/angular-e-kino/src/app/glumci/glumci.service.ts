import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { glumacCreationDTO, glumacDTO, glumciFilmDTO } from '../glumci/glumacCreationModel'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlumciService {

  constructor(private http:HttpClient) { }
  private apiURL=environment.apiURL+'/glumci';

  create(glumac: glumacCreationDTO){
    return this.http.post(this.apiURL,glumac)

  }
  getAll(): Observable<glumacDTO[]>
  {
    return this.http.get<glumacDTO[]>(this.apiURL);
  }

  getById(id:number):Observable<glumacDTO>
  {
    return this.http.get<glumacDTO>(`${this.apiURL}/${id}`);
  }

  searchByName(name: string): Observable<glumciFilmDTO[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post<glumciFilmDTO[]>(`${this.apiURL}/searchByName`, 
    JSON.stringify(name), {headers});
  }


  edit(id:number,glumac:glumacCreationDTO)
  {
    return this.http.put((`${this.apiURL}/${id}`),glumac);
  }


  delete(id:number)
  {
    return this.http.delete(`${this.apiURL}/${id}`);

  }


 



}
