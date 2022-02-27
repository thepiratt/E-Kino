import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/eventi/event.service';
import{eventCreationDTO} from'src/app/eventi/event.model'

@Component({
  selector: 'app-eventi-dodaj',
  templateUrl: './eventi-dodaj.component.html',
  styleUrls: ['./eventi-dodaj.component.css']
})
export class EventiDodajComponent implements OnInit {

  constructor(private router:Router,private eventServis:EventService) { }

  ngOnInit(): void {
  }
  saveChanges(eventCreationDTO:eventCreationDTO)
  {
    this.eventServis.create(eventCreationDTO).subscribe(()=>{
      this.router.navigate(['eventi']);
    },error=>console.error(error));
  }
}
