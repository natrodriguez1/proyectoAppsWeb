import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  imports: [],
  templateUrl: './recipe-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeFormComponent { }
