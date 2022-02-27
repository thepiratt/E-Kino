import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-lista',
  templateUrl: './film-lista.component.html',
  styleUrls: ['./film-lista.component.css']
})
export class FilmListaComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }


  @Input()
  filmovi:any;

  @Output()
  onDelete = new EventEmitter<void>();

  remove(id: number){
    this.filmService.delete(id).subscribe(() => {
      this.onDelete.emit();
    });
  }

}
