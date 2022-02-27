import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { glumacCreationDTO } from '../glumacCreationModel';
import { GlumciService } from '../glumci.service';

@Component({
  selector: 'app-glumci-add',
  templateUrl: './glumci-add.component.html',
  styleUrls: ['./glumci-add.component.css']
})
export class GlumciAddComponent implements OnInit {

  constructor(private glumacServis:GlumciService,private router:Router) { }

  ngOnInit(): void {
  }

  saveChanges(glumacCM: glumacCreationDTO)
  {
    this.glumacServis.create(glumacCM).subscribe(()=>{
      this.router.navigate(['glumci']);

    });



  }

}
