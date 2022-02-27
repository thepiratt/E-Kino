import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { zanrCreationDTO, zanrDTO } from 'src/app/zanrovi/zanr.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ZanrService } from 'src/app/zanrovi/zanr.service';

@Component({
  selector: 'app-zanr-edit',
  templateUrl: './zanr-edit.component.html',
  styleUrls: ['./zanr-edit.component.css']
})
export class ZanrEditComponent implements OnInit {
  

  constructor(private activatedRoute: ActivatedRoute,private znarServis:ZanrService,private router:Router) { }

  model!: zanrDTO;


  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.znarServis.getById(params['id']).subscribe(zanr=>{
        this.model=zanr;
      })

    });

  }

  saveChanges(zanrCreationDTO:zanrCreationDTO)
  {
    this.znarServis.edit(this.model.id,zanrCreationDTO).subscribe(()=>{
      this.router.navigate(["/zanrovi"]);
    })
   
  }
 

}
