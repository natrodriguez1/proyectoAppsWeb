import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [LoginService],
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService:LoginService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
    }


    console.log('Login attempt', this.loginForm.value);
    //IMPLEMENTAR API

    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Usuario registrado con éxito', response);
      },
      error: (error) => {
        console.error('Error al registrar el usuario', error);
      }
    });

  }
}
