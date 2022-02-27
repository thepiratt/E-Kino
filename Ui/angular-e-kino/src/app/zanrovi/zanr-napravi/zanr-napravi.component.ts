import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZanrService } from 'src/app/zanrovi/zanr.service';
import{zanrCreationDTO} from'src/app/zanrovi/zanr.model'

@Component({
  selector: 'app-zanr-napravi',
  templateUrl: './zanr-napravi.component.html',
  styleUrls: ['./zanr-napravi.component.css']
})
export class ZanrNapraviComponent implements OnInit {

  constructor(private router:Router,private znarServis:ZanrService) { }

  ngOnInit(): void {
  }


  saveChanges(zanrCreationDTO:zanrCreationDTO)
  {
    this.znarServis.create(zanrCreationDTO).subscribe(()=>{
      this.router.navigate(['zanrovi']);
    },error=>console.error(error));
  }
  

}
