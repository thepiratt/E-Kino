import { ArtikalService } from './../artikal.service';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { filter } from 'rxjs';
import { artikalDTO } from 'src/app/artikli/artikal.model';

@Component({
  selector: 'app-artikli-index',
  templateUrl: './artikli-index.component.html',
  styleUrls: ['./artikli-index.component.css']
})
export class ArtikliIndexComponent implements OnInit {

  artikal: artikalDTO[]=[];
  columnsToDisplay=['naziv','opis','actions'];

  constructor(private ArtikalService: ArtikalService) { }

  ngOnInit(): void {
    this.loadArtikal();
  }

  loadArtikal()
  {
    this.ArtikalService.getAll().subscribe(artikal=>{this.artikal=artikal;});
  }

  delete(id:number)
  {
    this.ArtikalService.delete(id).subscribe(()=>{this.loadArtikal();});
  }

}
