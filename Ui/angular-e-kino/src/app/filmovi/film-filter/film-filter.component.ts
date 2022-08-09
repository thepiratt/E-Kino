import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { projekcijaDTO } from 'src/app/projekcija/projekcija-model';
import { ProjekcijaService } from 'src/app/projekcija/projekcija.service';
import { zanrDTO } from 'src/app/zanrovi/zanr.model';
import { ZanrService } from 'src/app/zanrovi/zanr.service';
import { FilmService } from '../film.service';
import { filmDTO } from '../model';

@Component({
  selector: 'app-film-filter',
  templateUrl: './film-filter.component.html',
  styleUrls: ['./film-filter.component.css']
})
export class FilmFilterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private projekcijaService:ProjekcijaService,private httpKlijent:HttpClient,private zanrService:ZanrService,private filmService:FilmService,private activatedROute:ActivatedRoute) { }
  form!:FormGroup;
  zanrovi!:zanrDTO[];
  projekcije!:projekcijaDTO[];
  filmovi:filmDTO[];
  trenutnaStranica=1;
  izdanjaPoStranici=10;
  startnaVrijesnot:any;
  ukupnaVrijednost:any;
  selectedDay: string = '';

  

  



  ngOnInit(): void {
    this.form=this.formBuilder.group({
      naslov:'',
      zanrId: 0,
      uskoro_se_prikazuje:false,
      prikazuje_Se: false,
      dan:this.selectedDay,
    
    });
    this.startnaVrijesnot=this.form.value;
   // this.readParametersFromURL();
    this.zanrService.getAll().subscribe((x:any)=>{
      this.zanrovi=x;
     /* this.projekcijaService.getAll().subscribe((x:any)=>{
        this.projekcije=x;
      });*/
      
      this.filterMovies(this.form.value);
      this.form.valueChanges.subscribe(values=>{
        this.filterMovies(values);
      })
    })
    

    this.projekcijaService.getAll().subscribe((x:any)=>{
      this.projekcije=x;
    });

    this.filterMovies(this.form.value);
    console.log(this.selectedDay);
  }
  filterMovies(values: any){
    
    values.page=this.trenutnaStranica;
    values.recordsPerPage=this.izdanjaPoStranici;
    this.filmService.filter(values).subscribe((response: HttpResponse<filmDTO[]>)=>{
      this.filmovi = response.body;
      this.ukupnaVrijednost = response.headers.get("totalAmountOfRecords");
    })
  }


  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
  

 

  cleanForm()
  {
    this.form.patchValue(this.startnaVrijesnot);

  }

  Ponedeljak(){
    this.selectedDay='Ponedeljak';
  }
  

 /* private readParametersFromURL(){
    this.activatedROute.queryParams.subscribe(params => {
      var obj: any = {};

      if (params['naslov']){
        obj.Naslov = params['naslov'];
      }

      if (params['zanrId']){
        obj.ZanrId = Number(params['zanrId']);
      }

      if (params['uskoro_se_prikazuje']){
        obj.Uskoro_se_prikazuje = params['uskoro_se_prikazuje']
      }

      if (params['prikazuje_Se']){
        obj.Prikazuje_Se = params['prikazuje_Se'];
      }

      if (params['stranica']){
        this.trenutnaStranica = params['stranica'];
      }

      if (params['izdanjaPoStranici']){
        this.izdanjaPoStranici = params['izdanjaPoStranici'];
      }

      this.form.patchValue(obj);
    });
  }

  private writeParametersInURL(){
    const queryStrings = [];

    const formValues = this.form.value;

    if (formValues.naslov){
      queryStrings.push(`naslov=${formValues.naslov}`);
    }

    if (formValues.zanrId != '0'){
      queryStrings.push(`ZanrId=${formValues.zanrId}`);
    }

    if (formValues.uskoro_se_prikazuje){
      queryStrings.push(`uskoro_se_prikazuje=${formValues.uskoro_se_prikazuje}`);
    }

    if (formValues.prikazuje_Se){
      queryStrings.push(`prikazuje_Se=${formValues.prikazuje_Se}`);
    }

    queryStrings.push(`page=${this.trenutnaStranica}`);
    queryStrings.push(`izdanjaPoStranici=${this.izdanjaPoStranici}`);

    //this.location.replace('movies/filter', queryStrings.join('&'));
  }

  paginatorUpdate(event: PageEvent){
    this.trenutnaStranica = event.pageIndex + 1;
    this.izdanjaPoStranici = event.pageSize;
    this.writeParametersInURL();
    this.filterMovies(this.form.value);
  }*/

  

  onDelete(){
    this.filterMovies(this.form.value);
    //filter angular on delete unction
  }

}
