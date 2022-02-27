import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from'src/environments/environment'
import { Observable } from 'rxjs';
import{artikalCreationDTO, artikalDTO} from './artikal.model'

@Injectable({
  providedIn: 'root'
})
export class ArtikalService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL+'/artikli';


  getAll(): Observable<artikalDTO[]>
  {
    return this.http.get<artikalDTO[]>(this.apiURL);
  }

 getById(id:number):Observable<artikalDTO>
 {
   return this.http.get<artikalDTO>(`${this.apiURL}/${id}`);
 }


  create(zanr: artikalCreationDTO){
    return this.http.post(this.apiURL,zanr)
  }

  edit(id:number,zanr:artikalCreationDTO)
  {
    return this.http.put((`${this.apiURL}/${id}`),zanr);
  }


  delete(id:number)
  {
    return this.http.delete(`${this.apiURL}/${id}`);

  }

  private BuildFormData(artikal: artikalCreationDTO) : FormData
  {

    const formData=new FormData();
    formData.append('naziv',artikal.naziv);
    formData.append('opis',artikal.opis);
    formData.append('cijena',artikal.cijena);
    
    

    

    return formData;
  }

}
