import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';
import { kinoCreateModel,kinoDTO } from './kino-model';


@Component({
  selector: 'app-kino-forma',
  templateUrl: './kino-forma.component.html',
  styleUrls: ['./kino-forma.component.css']
})
export class KinoFormaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!:FormGroup;

  @Input()
  model!:kinoDTO;

  @Output()
  onSaveChanges = new EventEmitter<kinoCreateModel>();

  initialCoordinates: coordinatesMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ime: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    })

    if (this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }
  onSelectedLocation(coordinates: coordinatesMap){
    this.form.patchValue(coordinates);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
