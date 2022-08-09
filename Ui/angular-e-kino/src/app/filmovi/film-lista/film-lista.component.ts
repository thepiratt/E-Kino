import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-lista',
  templateUrl: './film-lista.component.html',
  styleUrls: ['./film-lista.component.css']
})
export class FilmListaComponent implements OnInit {

  constructor(private filmService: FilmService,private router: Router) { }

  ngOnInit(): void {
  }


  @Input()
  filmovi:any;

  @Output()
  onDelete = new EventEmitter<void>();

  remove(id: number){
    this.filmService.delete(id).subscribe(() => {
      this.onDelete.emit();
      let currentUrl = this.router.url;
       this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
    });
  }

}
