import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { glumciFilmDTO } from '../glumacCreationModel';
import { GlumciService } from '../glumci.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-glumci-odabir',
  templateUrl: './glumci-odabir.component.html',
  styleUrls: ['./glumci-odabir.component.css']
})
export class GlumciOdabirComponent implements OnInit {

  constructor(private glumacServis:GlumciService) { }
  control: FormControl = new FormControl();

  @Input()
  oznaceniGlumci: glumciFilmDTO[] = [];

  glumciZaPrikaz: glumciFilmDTO[] = [];

  columnsToDisplay = [ 'ime', 'uloga', 'actions']

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {

    this.control.valueChanges.subscribe(value => {
      this.glumacServis.searchByName(value).subscribe(actors => {
        this.glumciZaPrikaz = actors;
      });
    })
  }

  
  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);

    this.control.patchValue('');

    if (this.oznaceniGlumci.findIndex(x => x.id == event.option.value.id) !== -1){
      return;
    }

    this.oznaceniGlumci.push(event.option.value);
    if (this.table !== undefined){
      this.table.renderRows();
    }
  }

  remove(glumac:any){
    const index = this.oznaceniGlumci.findIndex(a => a.ime === glumac.ime);
    this.oznaceniGlumci.splice(index, 1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>){
    const previousIndex = this.oznaceniGlumci.findIndex(glumac => glumac === event.item.data);
    moveItemInArray(this.oznaceniGlumci, previousIndex, event.currentIndex);
    this.table.renderRows();
  }

  

}
