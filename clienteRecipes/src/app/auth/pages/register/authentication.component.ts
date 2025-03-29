import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { SocialsComponent } from "../../components/socials/socials.component";

@Component({
  selector: 'app-authentication',
  imports: [RegisterFormComponent, SocialsComponent],
  templateUrl: './authentication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthenticationComponent { }
