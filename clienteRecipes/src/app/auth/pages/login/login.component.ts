import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { SocialsComponent } from "../../components/socials/socials.component";

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, SocialsComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent { }
