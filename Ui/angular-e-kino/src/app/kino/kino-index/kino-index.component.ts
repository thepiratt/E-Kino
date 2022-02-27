import { Component, OnInit } from '@angular/core';
import { kinoDTO } from '../kino-forma/kino-model';
import { KinoService } from '../kino.service';

@Component({
  selector: 'app-kino-index',
  templateUrl: './kino-index.component.html',
  styleUrls: ['./kino-index.component.css']
})
export class KinoIndexComponent implements OnInit {

  
  kino:kinoDTO[]=[];
  displayColumns = ['ime', 'actions'];
  constructor(private kinoService: KinoService) { }
  ngOnInit(): void {
    this.kinoService.get().subscribe(kino=> this.kino=kino);
   
  }
  loadData(){
    this.kinoService.get().subscribe(kino => this.kino = kino);
  }
  delete(id: number){
    this.kinoService.delete(id).subscribe(() => this.loadData());
  }

}
