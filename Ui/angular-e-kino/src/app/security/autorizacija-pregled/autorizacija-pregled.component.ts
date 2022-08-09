import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-autorizacija-pregled',
  templateUrl: './autorizacija-pregled.component.html',
  styleUrls: ['./autorizacija-pregled.component.css']
})
export class AutorizacijaPregledComponent implements OnInit {

  constructor(private securityService:SecurityService) { }

  ngOnInit(): void {
  }

  @Input()
  role!:string;
    
  

  public isAuthorized(){
    if(this.role){
      return this.securityService.getRole()===this.role;

    }else{
    return this.securityService.isAuthenticated();
    }
  }

}
