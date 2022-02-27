import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { artikalCreationDTO, artikalDTO } from 'src/app/artikli/artikal.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtikalService } from 'src/app/artikli/artikal.service';

@Component({
  selector: 'app-artikli-edit',
  templateUrl: './artikli-edit.component.html',
  styleUrls: ['./artikli-edit.component.css']
})
export class ArtikliEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private artikalServis:ArtikalService,private router:Router) { }
  model!:artikalDTO;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.artikalServis.getById(params['id']).subscribe(artikal=>{this.model=artikal;})
    });
  }


  saveChanges(artikalCreationDTO:artikalCreationDTO)
  {
    this.artikalServis.edit(this.model.id,artikalCreationDTO).subscribe(()=>{
      this.router.navigate(["/artikli"]);
    })
   
  }
}
