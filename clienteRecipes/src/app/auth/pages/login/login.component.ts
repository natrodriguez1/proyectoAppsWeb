import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { SocialsComponent } from "../../components/socials/socials.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, SocialsComponent, RouterLink],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent { }
