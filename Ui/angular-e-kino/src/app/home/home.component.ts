import { Component, OnInit } from '@angular/core';
import { FilmService } from '../filmovi/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.loadData();
  }

  moviesInTheaters:any;
  moviesFutureReleases:any;

  loadData(){
    this.filmService.getHomePageMovies().subscribe(homeDTO => {
      this.moviesFutureReleases = homeDTO.uskoro;
      this.moviesInTheaters = homeDTO.prikazuje_se;
    })
  }

  onDelete(){
    this.loadData();
  }

}
