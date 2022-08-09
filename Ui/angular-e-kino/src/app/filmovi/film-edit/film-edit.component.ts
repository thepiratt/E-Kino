import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { glumciFilmDTO } from 'src/app/glumci/glumacCreationModel';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector-model';
import { FilmService } from '../film.service';
import { filmCreationDTO, filmDTO } from '../model';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private filmService:FilmService,private router:Router) { }

  model!:filmDTO;
  odabraniZanrovi!: multipleSelectorModel[];
  neOdabraniZanrovi!: multipleSelectorModel[];
  odabranaKina!: multipleSelectorModel[];
  neOdabranaKina!: multipleSelectorModel[];
  odabraneKinoProjekcije!: multipleSelectorModel[];
  neOdabraneKinoProjekcije!: multipleSelectorModel[];
  
  odabraniGlumci!: glumciFilmDTO[];


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.filmService.putGet(params['id']).subscribe(putGetDTO => {
        this.model = putGetDTO.film;

        this.odabraniZanrovi = putGetDTO.odabraniZanrovi.map(x => {
          return <multipleSelectorModel>{key: x.id, value: x.name}
        });

        this.neOdabraniZanrovi = putGetDTO.neOdabraniZanrovi.map(x => {
          return <multipleSelectorModel>{key: x.id, value: x.name}
        });
  
        this.odabranaKina = putGetDTO.odabranaKina.map(x => {
          return <multipleSelectorModel>{key: x.id, value: x.ime}
        });

        this.neOdabranaKina = putGetDTO.neOdabranaKina.map(x => {
          return <multipleSelectorModel>{key: x.id, value: x.ime}
        });

        this.neOdabraneKinoProjekcije = putGetDTO.neOdabraneKinoProjekcije.map(kinoprojekcije => {
          return <multipleSelectorModel>{key: kinoprojekcije.id, value: `${kinoprojekcije.dan}: ${kinoprojekcije.termin}h`}
        });

        this.odabraneKinoProjekcije = putGetDTO.odabraneKinoProjekcije.map(kinoprojekcije => {
          return <multipleSelectorModel>{key: kinoprojekcije.id, value: `${kinoprojekcije.dan}: ${kinoprojekcije.termin}h`}
        });
       
        
    

        this.odabraniGlumci = putGetDTO.glumci;

      });
    });
  }


  saveChanges(filmCM:filmCreationDTO)
  {
    this.filmService.edit(this.model.id, filmCM).subscribe(() => {
      this.router.navigate(['/film/' + this.model.id]);
    });
  }

}
