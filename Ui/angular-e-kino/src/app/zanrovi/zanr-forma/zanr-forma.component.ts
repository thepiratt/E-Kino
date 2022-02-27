import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zanrCreationDTO } from 'src/app/zanrovi/zanr.model';

@Component({
  selector: 'app-zanr-forma',
  templateUrl: './zanr-forma.component.html',
  styleUrls: ['./zanr-forma.component.css']
})
export class ZanrFormaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;


  @Output()
  onSaveChanges: EventEmitter<zanrCreationDTO>=new EventEmitter<zanrCreationDTO>();

  ngOnInit(): void {

    this.form=this.formBuilder.group({
      name: ['',{
        validators:[Validators.required, Validators.minLength(3)]
      }]


    });

  }

  saveChanges()
  {
    
    this.onSaveChanges.emit(this.form.value);
  }
  getErrorMessageFieldName()
  {
    const field=this.form.get('name');
    
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
