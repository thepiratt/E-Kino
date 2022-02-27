import { Component, OnInit } from '@angular/core';
import { filmCreationDTO, filmDTO } from '../model';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {

  constructor() { }

 // model:filmDTO={naslov:'Spider-Man',prikazujeSe:true,opis:'nesto',datumIzlaska:new Date(),trailer:'nesto',poster:'https://slike1.blitz-cinestar.hr/Plakati/25.11.2021_9_17_29_spiderman_HR_zadnji.jpg?preset=thumb-500',zanrIDs:1}
  ngOnInit(): void {
  }


  saveChanges(filmCM:filmCreationDTO)
  {

  }

}
