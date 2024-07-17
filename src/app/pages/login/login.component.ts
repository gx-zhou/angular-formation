import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../../core/validators/domain.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  propEmail = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ])
  propPass = new FormControl()
  myForm = new FormGroup({
    email: this.propEmail,
    password: this.propPass
  })
  submitted = false
  
  ngOnInit(): void {
    setTimeout(() => {
      this.propEmail.setValue('test')
    }, 2000)
  }

  login() {
    this.submitted = true
    console.log(this.myForm.value)
  }
}
