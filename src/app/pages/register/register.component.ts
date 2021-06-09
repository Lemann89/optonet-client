import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: UserService, private router: Router) { }

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

  }

  onSubmit(): void {
    const registerData = {...this.registerForm.getRawValue()};
    delete registerData.repeatedPassword;
    this.authService.register(registerData).subscribe(res => {
      localStorage.setItem('token', res.Bearer);
      this.router.navigate(['/']);
    });
  }

}
