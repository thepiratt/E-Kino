import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { glumacCreationDTO } from '../glumacCreationModel';

@Component({
  selector: 'app-form-glumci',
  templateUrl: './form-glumci.component.html',
  styleUrls: ['./form-glumci.component.css']
})
export class FormGlumciComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form!: FormGroup;

@Input()
model!: glumacCreationDTO;


@Output()
onSaveChanges=new EventEmitter<glumacCreationDTO>();
  
  ngOnInit(): void {
    this.form=this.formBuilder.group({

      ime:['',{
        validators:[Validators.required]
      }],
      datumRodjenja:'',
      picture:'',
      biografija:''
    });
    if(this.model!==undefined)
    {
      this.form.patchValue(this.model);
    }
  }
  
  onImageSelected(image:any)
  {
    this.form.get('picture')?.setValue(image);

  }
  saveChanges()
  {
    this.onSaveChanges.emit(this.form.value);

  }
  changeMarkdown(content:any)
  {
this.form.get('biografija')?.setValue(content);
  }

}
