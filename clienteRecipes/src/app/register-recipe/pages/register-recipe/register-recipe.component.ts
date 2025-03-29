import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { RecipeFormComponent } from "../../components/recipe-form/recipe-form.component";

@Component({
  selector: 'app-register-recipe',
  imports: [NavbarComponent, FooterComponent, RecipeFormComponent],
  templateUrl: './register-recipe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterRecipeComponent { }
