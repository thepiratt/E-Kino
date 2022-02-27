import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { zanrDTO } from 'src/app/zanrovi/zanr.model';
import { ZanrService } from 'src/app/zanrovi/zanr.service';


@Component({
  selector: 'app-zanr-index',
  templateUrl: './zanr-index.component.html',
  styleUrls: ['./zanr-index.component.css']
})
export class ZanrIndexComponent implements OnInit {
  zanr: zanrDTO[]=[];
  columnsToDisplay=['name','actions'];





  constructor(private zanrService:ZanrService) { }

  ngOnInit(): void {
    this.loadZanr();
    
  } 
  loadZanr()
  {
    this.zanrService.getAll().subscribe(zanr=>{
      this.zanr=zanr;
    });
  }

  delete(id:number)
  {
    this.zanrService.delete(id).subscribe(()=>{
      this.loadZanr();
       });
  }

}
