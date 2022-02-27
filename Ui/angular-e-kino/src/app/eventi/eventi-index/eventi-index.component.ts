import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { filter } from 'rxjs';
import { eventDTO } from 'src/app/eventi/event.model';


@Component({
  selector: 'app-eventi-index',
  templateUrl: './eventi-index.component.html',
  styleUrls: ['./eventi-index.component.css']
})
export class EventiIndexComponent implements OnInit {
  event: eventDTO[]=[];
  columnsToDisplay =['naziv','opis','actions'];
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.loadEvent();
  }
  loadEvent()
  {
    this.eventService.getAll().subscribe(event=>{this.event=event});
  }
  delete(id:number)
  {
    this.eventService.delete(id).subscribe(()=>{this.loadEvent()});
  }
}
