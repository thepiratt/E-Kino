import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { artikalCreationDTO } from 'src/app/artikli/artikal.model';

@Component({
  selector: 'app-artikli-forma',
  templateUrl: './artikli-forma.component.html',
  styleUrls: ['./artikli-forma.component.css']
})
export class ArtikliFormaComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }

  form!: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<artikalCreationDTO>=new EventEmitter<artikalCreationDTO>();

  ngOnInit(): void {
    this.form=this.FormBuilder.group({
      naziv: ['',{
        validators:[Validators.required, Validators.minLength(3)]
      }],
      opis: ['', {
        validators: [Validators.required]
      }],
      cijena: ['', {
        validators: [Validators.required]
      }]
    });
  }

  saveChanges()
  {
    
    this.onSaveChanges.emit(this.form.value);
  }
  getErrorMessageFieldName()
  {
    const field=this.form.get('naziv');
    
    if(field?.hasError('required')){
      return 'The name field is required';
    }
    if(field?.hasError('minlenght'))
    {
      return 'The minimum lenght is 3';
    }
    return '';
  }






}
