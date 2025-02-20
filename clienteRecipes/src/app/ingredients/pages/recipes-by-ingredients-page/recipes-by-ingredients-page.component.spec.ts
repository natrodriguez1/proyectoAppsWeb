import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesByIngredientsPageComponent } from './recipes-by-ingredients-page.component';

describe('RecipesByIngredientsPageComponent', () => {
  let component: RecipesByIngredientsPageComponent;
  let fixture: ComponentFixture<RecipesByIngredientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesByIngredientsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesByIngredientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
