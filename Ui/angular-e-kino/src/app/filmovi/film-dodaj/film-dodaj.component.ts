import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector-model';
import { FilmService } from '../film.service';
import { filmCreationDTO } from '../model';

@Component({
  selector: 'app-film-dodaj',
  templateUrl: './film-dodaj.component.html',
  styleUrls: ['./film-dodaj.component.css']
})
export class FilmDodajComponent implements OnInit {

  constructor(private filmServis:FilmService,private router:Router) { }
  
  neOznaceniZanrovi!: multipleSelectorModel[];
  neOznacenaKina!: multipleSelectorModel[];
  neOznaceniTermini!:multipleSelectorModel[];

  ngOnInit(): void {
    this.filmServis.postGet().subscribe(data=>{
      
      this.neOznaceniZanrovi = data.zanrovi.map(zanr => {
        return <multipleSelectorModel>{key: zanr.id, value: zanr.name}
      });

      this.neOznacenaKina = data.kina.map(kino => {
        return <multipleSelectorModel>{key: kino.id, value: kino.ime}
      });

      this.neOznaceniTermini = data.kinoProjekcije.map(kinoprojekcije => {
        return <multipleSelectorModel>{key: kinoprojekcije.id, value: `${kinoprojekcije.dan}: ${kinoprojekcije.termin}h`}
      });




    });
  }

  saveChanges(film:filmCreationDTO)
  {
    console.log(film);
    this.filmServis.create(film).subscribe(() => {
      this.router.navigate(['']);
    })
  }

}
