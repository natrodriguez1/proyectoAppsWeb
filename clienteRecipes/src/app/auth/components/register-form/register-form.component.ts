import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [RegisterService],
  templateUrl: './register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {

  registrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private registerService:RegisterService, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }


  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  };


  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;


    if (this.registrationForm.invalid) {
      return;
    }


    console.log('Registration successful!', this.registrationForm.value);
    // IMPLEMENTAR API

    this.registerService.register(this.registrationForm.value).subscribe({
      next: (response) => {
        console.log('Usuario registrado con éxito', response);
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        console.error('Error al registrar el usuario', error);
      }
    });


  }
}
