import { Component } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm! : FormGroup;
  submitted = false;
  userLogin = {
    "email" : "",
    "password" : ""
  }

  constructor(private FormBuilder : FormBuilder) { }

  ngOnInit(){
    this.loginForm = this.FormBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    });
  }
  submitLogin(){

  }

  resetForm(){
    this.submitted = false;
    this.loginForm.reset;
  }
}
