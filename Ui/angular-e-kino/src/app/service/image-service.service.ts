import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  _apiURL="https://localhost:44333/api/filmovi";

  constructor(private _http: HttpClient) { }
  addImages(id:number,images: FormData,type: string)
  {
    return this._http.post(`${this._apiURL}/${type}/${id}}`,images);
  }
  deleteImages(id:number,type: string)
  {
    return this._http.delete(`${this._apiURL}/${type}/${id}}`);
  }

}
