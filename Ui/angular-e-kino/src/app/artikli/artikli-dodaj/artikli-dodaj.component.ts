import { ArtikalService } from './../artikal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{artikalCreationDTO} from'src/app/artikli/artikal.model'

@Component({
  selector: 'app-artikli-dodaj',
  templateUrl: './artikli-dodaj.component.html',
  styleUrls: ['./artikli-dodaj.component.css']
})
export class ArtikliDodajComponent implements OnInit {

  constructor(private router: Router, private ArtikalService:ArtikalService) { }

  ngOnInit(): void {
  }

  saveChanges(artikalCreationDTO:artikalCreationDTO)
  {
    this.ArtikalService.create(artikalCreationDTO).subscribe(()=>{
      this.router.navigate(['artikli']);
    },error=>console.error(error));
  }

}
