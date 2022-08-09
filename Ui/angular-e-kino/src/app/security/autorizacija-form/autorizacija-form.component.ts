import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import{userCredentials} from 'src/app/security/security.model'

@Component({
  selector: 'app-autorizacija-form',
  templateUrl: './autorizacija-form.component.html',
  styleUrls: ['./autorizacija-form.component.css']
})
export class AutorizacijaFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!:FormGroup;

  @Input()
  action: string='Registracija';

  @Output()
  onSubmit = new EventEmitter<userCredentials>();

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      email: ['',{
        validators: [Validators.required,Validators.email]
      }],
      password: ['',{
        validators: [Validators.required]
      }]
    });
  }

  getEmailError(){
    var field = this.form.get('email');
    if(field?.hasError('required'))
    {
      return "Morate unijeti email";
    }
    if(field?.hasError('email')){
      return "Nije Vam ispravan email";
    }

    return '';
  }

}
