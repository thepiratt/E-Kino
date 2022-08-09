import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projekcijaCreateDTO } from '../projekcija-model';
import { ProjekcijaService } from '../projekcija.service';

@Component({
  selector: 'app-projekcija-add',
  templateUrl: './projekcija-add.component.html',
  styleUrls: ['./projekcija-add.component.css']
})
export class ProjekcijaAddComponent implements OnInit {

  constructor(private router:Router,private projekcijaService:ProjekcijaService) { }

  ngOnInit(): void {
  }

  
  saveChanges(projekcijaDTO:projekcijaCreateDTO)
  {
    this.projekcijaService.create(projekcijaDTO).subscribe(()=>{
      this.router.navigate(['projekcije']);
    },error=>console.error(error));
  }

}
