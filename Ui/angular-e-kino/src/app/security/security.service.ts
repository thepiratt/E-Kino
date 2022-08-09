import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authenticationResponse, userCredentials } from './security.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpKlijnet:HttpClient) { }

  private apiURL= environment.apiURL+"/accounts";
  private tokenKey: string = 'token';
  private trajanjeTokenKey: string = 'token-trajanje';
  private readonly roleField = "role";


  isAuthenticated(): boolean{
    const token = localStorage.getItem(this.tokenKey);

    if (!token){
      return false;
    }

    const trajanje = localStorage.getItem(this.trajanjeTokenKey);
    const trajanjeDatum = new Date(trajanje);

    if (trajanjeDatum <= new Date()){
      this.logout();
      return false;
    }

    return true;

  }
  getFieldFromJWT(field:string){
    const token = localStorage.getItem(this.tokenKey);
    if(!token){return '';}
    const dataToken= JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }

  getRole():string{
    return this.getFieldFromJWT(this.roleField);
  }
  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.trajanjeTokenKey);
  }

  register(userCredentials:userCredentials): Observable<authenticationResponse>{
    return this.httpKlijnet.post<authenticationResponse>(this.apiURL+"/create",userCredentials);

  }
  login(userCredentials:userCredentials): Observable<authenticationResponse>{
    return this.httpKlijnet.post<authenticationResponse>(this.apiURL+"/login",userCredentials);

  }
  saveToken(authenticationResponse:authenticationResponse){
    localStorage.setItem(this.tokenKey,authenticationResponse.token);
    localStorage.setItem(this.trajanjeTokenKey,authenticationResponse.trajanje.toString());

  }
  getToken(){
    return localStorage.getItem(this.tokenKey);
  }
}
