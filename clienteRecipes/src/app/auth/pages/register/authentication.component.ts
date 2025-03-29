import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { SocialsComponent } from "../../components/socials/socials.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication',
  imports: [RegisterFormComponent, SocialsComponent, RouterLink],
  templateUrl: './authentication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthenticationComponent { }
