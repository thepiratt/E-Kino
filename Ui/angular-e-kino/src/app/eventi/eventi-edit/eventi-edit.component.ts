import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { eventCreationDTO, eventDTO } from 'src/app/eventi/event.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/eventi/event.service';
@Component({
  selector: 'app-eventi-edit',
  templateUrl: './eventi-edit.component.html',
  styleUrls: ['./eventi-edit.component.css']
})
export class EventiEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private eventServis:EventService,private router:Router) { }
  model!: eventDTO;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.eventServis.getById(params['id']).subscribe(event=>{
        this.model=event;
      })
    });
  }
  saveChanges(eventCreationDTO:eventCreationDTO)
  {
    this.eventServis.edit(this.model.id,eventCreationDTO).subscribe(()=>{
      this.router.navigate(["/eventi"]);
    })
   
  }


}
