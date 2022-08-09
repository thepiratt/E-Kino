import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { projekcijaCreateDTO } from '../projekcija-model';

@Component({
  selector: 'app-projekcija-form',
  templateUrl: './projekcija-form.component.html',
  styleUrls: ['./projekcija-form.component.css']
})
export class ProjekcijaFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;
  @Output()
  onSaveChanges: EventEmitter<projekcijaCreateDTO>=new EventEmitter<projekcijaCreateDTO>();

  ngOnInit(): void {

    this.form=this.formBuilder.group({
      dan: ['',{
        validators:[Validators.required, Validators.minLength(3)]
      },
      
    ],
    termin: ['',{
      validators:[Validators.required, Validators.minLength(3)]
    },
    
  ]



    });

  }

  saveChanges()
  {
    
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName()
  {
    const field=this.form.get('dan');
    
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
