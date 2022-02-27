import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { kinoCreateModel } from '../kino-forma/kino-model';
import { KinoService } from '../kino.service';

@Component({
  selector: 'app-kino-create',
  templateUrl: './kino-create.component.html',
  styleUrls: ['./kino-create.component.css']
})
export class KinoCreateComponent implements OnInit {

  constructor(private kinoService: KinoService,private router: Router) { }

  ngOnInit(): void {
  }
  saveChanges(kinoCreateModel: kinoCreateModel) {
    
    this.kinoService.create(kinoCreateModel).subscribe(() => {
      this.router.navigate(['/kina']);
    });
  }

}
