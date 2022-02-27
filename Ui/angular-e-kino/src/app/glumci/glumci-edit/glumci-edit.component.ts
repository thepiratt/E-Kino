import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { glumacCreationDTO, glumacDTO } from '../glumacCreationModel';
import { GlumciService } from '../glumci.service';

@Component({
  selector: 'app-glumci-edit',
  templateUrl: './glumci-edit.component.html',
  styleUrls: ['./glumci-edit.component.css']
})
export class GlumciEditComponent implements OnInit {

  constructor(private acitivatedRoute: ActivatedRoute,private glumacServis: GlumciService,private router:Router) { }
 model!:glumacDTO;

  ngOnInit(): void {

   this.acitivatedRoute.params.subscribe(params=>{
     this.glumacServis.getById(params['id']).subscribe(glumac=>{
       this.model=glumac;
     })
   });

   
  }
  saveChanges(glumacCM:glumacCreationDTO)
  {
    this.glumacServis.edit(this.model.id,glumacCM).subscribe(()=>{
      this.router.navigate(["/glumci"]);
    })
  }

}
