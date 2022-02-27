import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { kinoCreateModel, kinoDTO } from '../kino-forma/kino-model';
import { KinoService } from '../kino.service';

@Component({
  selector: 'app-kino-edit',
  templateUrl: './kino-edit.component.html',
  styleUrls: ['./kino-edit.component.css']
})
export class KinoEditComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,private kinoService: KinoService,private Router: Router) { }
  model!: kinoDTO;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.kinoService.getById(params['id']).subscribe(kino => 
        this.model = kino);

    });
  }
  

  saveChanges(kinoCreateModel: kinoCreateModel)
  {
    this.kinoService.edit(this.model.id,kinoCreateModel).subscribe(()=>{
      this.Router.navigate(["/kina"]);
    })
  }

}
