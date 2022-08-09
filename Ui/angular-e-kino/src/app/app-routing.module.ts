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
import { ProjekcijaIndexComponent } from './projekcija/projekcija-index/projekcija-index.component';
import { ProjekcijaAddComponent } from './projekcija/projekcija-add/projekcija-add.component';
import { ProjekcijaEditComponent } from './projekcija/projekcija-edit/projekcija-edit.component';
import { IsAdminGuard } from './is-admin.guard';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
const routes: Routes = [

  {path:'',component: HomeComponent},

  {path:'zanrovi',component:ZanrIndexComponent,canActivate: [IsAdminGuard]},
  {path:'zanrovi/napravi',component:ZanrNapraviComponent,canActivate: [IsAdminGuard]},
  {path:'zanrovi/edit/:id',component:ZanrEditComponent,canActivate: [IsAdminGuard]},

  {path:'projekcije',component:ProjekcijaIndexComponent,canActivate: [IsAdminGuard]},
  {path:'projekcije/add',component:ProjekcijaAddComponent,canActivate: [IsAdminGuard]},
  {path:'projekcije/edit/:id',component:ProjekcijaEditComponent,canActivate: [IsAdminGuard]},

  {path:'film',component:FilmDodajComponent,canActivate: [IsAdminGuard]},
  {path:'film/film-edit/:id',component:FilmEditComponent,canActivate: [IsAdminGuard]},
  {path:'film/film-filter',component:FilmFilterComponent},
  {path:'film/:id',component:FilmDetaljiComponent},

  {path:'artikli',component:ArtikliIndexComponent},
  {path:'artikli/dodaj',component:ArtikliDodajComponent,canActivate: [IsAdminGuard]},
  {path:'artikli/artikli-dodaj/:id',component:ArtikliDodajComponent,canActivate: [IsAdminGuard]},
  {path:'artikli/edit/:id',component:ArtikliEditComponent,canActivate: [IsAdminGuard]},

  {path:'glumci',component:GlumciComponent,canActivate: [IsAdminGuard]},
  {path:'glumci/add',component:GlumciAddComponent,canActivate: [IsAdminGuard]},
  {path:'glumci/edit/:id',component:GlumciEditComponent,canActivate: [IsAdminGuard]},

  {path:'kina',component:KinoIndexComponent,canActivate: [IsAdminGuard]},
  {path:'kina/add',component:KinoCreateComponent,canActivate: [IsAdminGuard]},
  {path:'kina/edit/:id',component:KinoEditComponent,canActivate: [IsAdminGuard]},

  {path:'eventi',component:EventiIndexComponent},
  {path:'eventi/dodaj',component:EventiDodajComponent,canActivate: [IsAdminGuard]},
  {path:'eventi/eventi-dodaj/:id',component:EventiDodajComponent,canActivate: [IsAdminGuard]},
  {path:'eventi/edit/:id',component:EventiEditComponent,canActivate: [IsAdminGuard]},


  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
