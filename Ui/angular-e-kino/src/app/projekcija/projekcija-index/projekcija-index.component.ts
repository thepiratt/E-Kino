import { Component, OnInit } from '@angular/core';
import { projekcijaDTO } from '../projekcija-model';
import { ProjekcijaService } from '../projekcija.service';

@Component({
  selector: 'app-projekcija-index',
  templateUrl: './projekcija-index.component.html',
  styleUrls: ['./projekcija-index.component.css']
})
export class ProjekcijaIndexComponent implements OnInit {

  projekcije: projekcijaDTO[]=[];
  columnsToDisplay=['dan','termin','actions'];

  constructor(private projekcijaService:ProjekcijaService) { }

  ngOnInit(): void {
this.load();
  }

  load()
  {
    this.projekcijaService.getAll().subscribe(x=>{
      this.projekcije=x;
    });
  }

  delete(id:number)
  {
    this.projekcijaService.delete(id).subscribe(()=>{
      this.load();
       });
  }

}
