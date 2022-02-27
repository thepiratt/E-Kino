import { Component, OnInit } from '@angular/core';
import { glumacDTO } from './glumacCreationModel';
import { GlumciService } from './glumci.service';

@Component({
  selector: 'app-glumci',
  templateUrl: './glumci.component.html',
  styleUrls: ['./glumci.component.css']
})
export class GlumciComponent implements OnInit {
  glumac: glumacDTO[]=[];
  columnsToDisplay=['ime','datumRodjenja','actions'];

  constructor(private glumacService:GlumciService) { }

  ngOnInit(): void {
    this.loadGlumci();
  }
  loadGlumci()
  {
    this.glumacService.getAll().subscribe(glumac=>{
      this.glumac=glumac;
    });
  }
  delete(id:number)
  {
    this.glumacService.delete(id).subscribe(()=>{
      this.loadGlumci();
       });
  }

}
