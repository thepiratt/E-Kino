import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { filmCreationDTO, filmDTO, filmPostGetDTO, homeDTO } from './model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  private apiURL=environment.apiURL+'/film';

  public postGet(): Observable<filmPostGetDTO>{
    return this.http.get<filmPostGetDTO>(`${this.apiURL}/postget`);
  } 

  public delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }


  public getHomePageMovies(): Observable<homeDTO>{
    return this.http.get<homeDTO>(this.apiURL);
  }

  public create(filmCreationDTO:filmCreationDTO)
  {
    const formData=this.BuildFormData(filmCreationDTO);
    return this.http.post(this.apiURL,formData);

  }
  public getById(id: number): Observable<filmDTO>{
    return this.http.get<filmDTO>(`${this.apiURL}/${id}`);
  }
  private BuildFormData(film: filmCreationDTO) : FormData
  {

    const formData=new FormData();
    formData.append('naziv',film.naziv);
    formData.append('opis',film.opis);
    formData.append('prikazujeSe',String(film.prikazujeSe));
    formData.append('trailer',film.trailer);
     if(film.datumIzalska)
    {
      formData.append('datumIzalska',formatDateFormData(film.datumIzalska));
    }
    if(film.poster)
    {
      formData.append('poster',film.poster);
    }
    formData.append('zanrovi', JSON.stringify(film.zanrovi));
    formData.append('kina', JSON.stringify(film.kina));
    formData.append('glumci', JSON.stringify(film.glumci));

    

    return formData;
  }
}
