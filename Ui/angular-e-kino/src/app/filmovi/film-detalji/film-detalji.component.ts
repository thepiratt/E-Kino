import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { coordinatesMapWithMessage } from 'src/app/utilities/map/coordinate';
import { filmDTO } from '../model';
import { FilmService } from '../film.service';
@Component({
  selector: 'app-film-detalji',
  templateUrl: './film-detalji.component.html',
  styleUrls: ['./film-detalji.component.css']
})
export class FilmDetaljiComponent implements OnInit {

  constructor(
    private filmService: FilmService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  film!: filmDTO;
  datumIzalska!: Date;
  trailerURL!: SafeResourceUrl;
  coordinates: coordinatesMapWithMessage[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.filmService.getById(params['id']).subscribe((film) => {
        this.film = film;
        this.datumIzalska = new Date(film.datumIzalska);
        this.trailerURL = this.generateYoutubeURLForEmbeddedVideo(film.trailer);
        this.coordinates = film.kina.map(kino => {
          return {latitude: kino.latitude, longitude: kino.longitude, 
            message: kino.ime}
        })
      });
    });
  }
  generateYoutubeURLForEmbeddedVideo(url: any): SafeResourceUrl{
    if (!url){
      return '';
    } 
    // https://www.youtube.com/watch?v=LKFuXETZUsI
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1){
      videoId = videoId.substring(0, ampersandPosition);
    }

     return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

}
