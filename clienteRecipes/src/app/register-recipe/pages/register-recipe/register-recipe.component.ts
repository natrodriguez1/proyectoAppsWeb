import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-register-recipe',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './register-recipe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterRecipeComponent { }
