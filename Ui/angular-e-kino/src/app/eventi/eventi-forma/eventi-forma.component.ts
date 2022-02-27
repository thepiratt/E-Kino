import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { eventCreationDTO } from 'src/app/eventi/event.model';
@Component({
  selector: 'app-eventi-forma',
  templateUrl: './eventi-forma.component.html',
  styleUrls: ['./eventi-forma.component.css']
})
export class EventiFormaComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }
  form!: FormGroup;
  @Output()
  onSaveChanges: EventEmitter<eventCreationDTO>=new EventEmitter<eventCreationDTO>();
  ngOnInit(): void {
    this.form=this.FormBuilder.group({
      naziv: ['',{
        validators:[Validators.required, Validators.minLength(5)]
      }],
      opis: ['',{
        validators:[Validators.required, Validators.minLength(5)]
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
      return 'Ovo polje je obavezno';
    }
    if(field?.hasError('minlenght'))
    {
      return 'Minimalna duzina je 5';
    }
    return '';
  }


}
