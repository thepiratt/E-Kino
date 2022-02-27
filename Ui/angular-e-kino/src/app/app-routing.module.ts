import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from'./home/home.component'
import{ ZanrIndexComponent } from'./zanrovi/zanr-index/zanr-index.component'
import{ ZanrNapraviComponent } from'./zanrovi/zanr-napravi/zanr-napravi.component'
import{ ZanrEditComponent } from'./zanrovi/zanr-edit/zanr-edit.component'
import { FilmFilterComponent } from './filmovi/film-filter/film-filter.component';
import{ FilmDodajComponent } from'./filmovi/film-dodaj/film-dodaj.component'
import{ FilmEditComponent } from'./filmovi/film-edit/film-edit.component'
import { ArtikliIndexComponent } from './artikli/artikli-index/artikli-index.component';
import { ArtikliDodajComponent } from './artikli/artikli-dodaj/artikli-dodaj.component';
import{ ArtikliEditComponent } from'./artikli/artikli-edit/artikli-edit.component'
import { GlumciComponent } from './glumci/glumci.component';
import { GlumciAddComponent } from './glumci/glumci-add/glumci-add.component';
import { GlumciEditComponent } from './glumci/glumci-edit/glumci-edit.component';
import { KinoIndexComponent } from './kino/kino-index/kino-index.component';
import { KinoCreateComponent } from './kino/kino-create/kino-create.component';
import { KinoEditComponent } from './kino/kino-edit/kino-edit.component';
import { FilmDetaljiComponent } from './filmovi/film-detalji/film-detalji.component';
import{ EventiIndexComponent } from'./eventi/eventi-index/eventi-index.component'
import{ EventiDodajComponent } from'./eventi/eventi-dodaj/eventi-dodaj.component'
import{ EventiEditComponent } from'./eventi/eventi-edit/eventi-edit.component'
const routes: Routes = [

  {path:'',component: HomeComponent},

  {path:'zanrovi',component:ZanrIndexComponent},
  {path:'zanrovi/napravi',component:ZanrNapraviComponent},
  {path:'zanrovi/edit/:id',component:ZanrEditComponent},

  {path:'film',component:FilmDodajComponent},
  {path:'film/film-edit/:id',component:FilmEditComponent},
  {path:'film/film-filter',component:FilmFilterComponent},
  {path:'film/:id',component:FilmDetaljiComponent},

  {path:'artikli',component:ArtikliIndexComponent},
  {path:'artikli/dodaj',component:ArtikliDodajComponent},
  {path:'artikli/artikli-dodaj/:id',component:ArtikliDodajComponent},
  {path:'artikli/edit/:id',component:ArtikliEditComponent},

  {path:'glumci',component:GlumciComponent},
  {path:'glumci/add',component:GlumciAddComponent},
  {path:'glumci/edit/:id',component:GlumciEditComponent},

  {path:'kina',component:KinoIndexComponent},
  {path:'kina/add',component:KinoCreateComponent},
  {path:'kina/edit/:id',component:KinoEditComponent},

  {path:'eventi',component:EventiIndexComponent},
  {path:'eventi/dodaj',component:EventiDodajComponent},
  {path:'eventi/eventi-dodaj/:id',component:EventiDodajComponent},
  {path:'eventi/edit/:id',component:EventiEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
