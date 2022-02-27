import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from'./material/material.module';
import { MenuComponent } from './menu/menu.component';

import { GlumciComponent } from './glumci/glumci.component';
import { HomeComponent } from './home/home.component';
import { ZanrIndexComponent } from './zanrovi/zanr-index/zanr-index.component';
import { ZanrNapraviComponent } from './zanrovi/zanr-napravi/zanr-napravi.component';
import { ZanrFormaComponent } from './zanrovi/zanr-forma/zanr-forma.component';
import { ZanrEditComponent } from './zanrovi/zanr-edit/zanr-edit.component';
import { FilmFilterComponent } from './filmovi/film-filter/film-filter.component';
import { FilmDodajComponent } from './filmovi/film-dodaj/film-dodaj.component';
import { FilmEditComponent } from './filmovi/film-edit/film-edit.component'
import{ReactiveFormsModule} from'@angular/forms';
import { ArtikliDodajComponent } from './artikli/artikli-dodaj/artikli-dodaj.component';


import{HttpClientModule} from '@angular/common/http'
import{FormsModule} from'@angular/forms';
import{LeafletModule} from '@asymmetrik/ngx-leaflet'

import { GenericListComponent } from './utilities/generic-list/generic-list.component'
import{SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { FormaFilmComponent } from './filmovi/forma-film/forma-film.component';
import { GlumciAddComponent } from './glumci/glumci-add/glumci-add.component';
import { FormGlumciComponent } from './glumci/form-glumci/form-glumci.component';
import { GlumciEditComponent } from './glumci/glumci-edit/glumci-edit.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { UploadComponent } from './upload/upload.component';
import { KinoIndexComponent } from './kino/kino-index/kino-index.component';
import { KinoEditComponent } from './kino/kino-edit/kino-edit.component';
import { KinoFormaComponent } from './kino/kino-forma/kino-forma.component';
import { KinoCreateComponent } from './kino/kino-create/kino-create.component';
import { MapComponent } from './utilities/map/map.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { GlumciOdabirComponent } from './glumci/glumci-odabir/glumci-odabir.component';
import { FilmDetaljiComponent } from './filmovi/film-detalji/film-detalji.component';
import { ArtikliFormaComponent } from './artikli/artikli-forma/artikli-forma.component';
import { ArtikliIndexComponent } from './artikli/artikli-index/artikli-index.component';
import { ArtikliEditComponent } from './artikli/artikli-edit/artikli-edit.component';
import { EventiDodajComponent } from './eventi/eventi-dodaj/eventi-dodaj.component';
import { EventiEditComponent } from './eventi/eventi-edit/eventi-edit.component';
import { EventiFormaComponent } from './eventi/eventi-forma/eventi-forma.component';
import { EventiIndexComponent } from './eventi/eventi-index/eventi-index.component';
import { FilmListaComponent } from './filmovi/film-lista/film-lista.component';










@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
 
    GlumciComponent,
    HomeComponent,
    ZanrIndexComponent,
    ZanrNapraviComponent,
    ZanrFormaComponent,
    ZanrEditComponent,
    FilmFilterComponent,
    FilmDodajComponent,
    FilmEditComponent,
    ArtikliDodajComponent,
    GenericListComponent,
    FormaFilmComponent,
    GlumciAddComponent,
    FormGlumciComponent,
    GlumciEditComponent,
    InputImgComponent,
    InputMarkdownComponent,
    UploadComponent,
    KinoIndexComponent,
    KinoEditComponent,
    KinoFormaComponent,
    KinoCreateComponent,
    MapComponent,
    MultipleSelectorComponent,
    GlumciOdabirComponent,
    FilmDetaljiComponent,
    ArtikliFormaComponent,
    ArtikliIndexComponent,
    ArtikliEditComponent,
    EventiDodajComponent,
    EventiEditComponent,
    EventiFormaComponent,
    EventiIndexComponent,
    FilmListaComponent,
    
    
  
    
   
   
  
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    MarkdownModule.forRoot(),
    LeafletModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
