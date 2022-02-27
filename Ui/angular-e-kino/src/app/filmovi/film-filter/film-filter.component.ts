import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-film-filter',
  templateUrl: './film-filter.component.html',
  styleUrls: ['./film-filter.component.css']
})
export class FilmFilterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form!:FormGroup;

  zanrovi=[{id:1,name:'Drama'},{id:2,name:'Akcija'},{id:3,name:'Horor'},{id:4,name:'Komedija'}]
  filmovi=[
    {title:'Spider-Man',poster:'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'},
    {title:'Južni vetar',poster:'https://upload.wikimedia.org/wikipedia/sr/thumb/1/1e/Ju%C5%BEni_vetar_%28film%29.jpeg/250px-Ju%C5%BEni_vetar_%28film%29.jpeg'},
    {title:'Inception',poster:'https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg'},

  ];
  originalMovies=this.filmovi;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      title:'',
      zanrID: 0,
      upcomingRealases:false,
      inTheaters: false
    });
    this.form.valueChanges.subscribe(values=>{
      this.filmovi=this.originalMovies;
      this.filterMovies(values);

    });
  }
  filterMovies(values:any)
  {
    if(values.title)
    {
      this.filmovi=this.filmovi.filter(film=>film.title.indexOf(values.title)!==-1);
    }
  }

  cleanForm()
  {
    this.form.reset();

  }

}
