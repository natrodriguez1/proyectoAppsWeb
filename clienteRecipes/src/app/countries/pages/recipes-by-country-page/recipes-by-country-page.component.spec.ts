import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesByCountryPageComponent } from './recipes-by-country-page.component';

describe('RecipesByCountryPageComponent', () => {
  let component: RecipesByCountryPageComponent;
  let fixture: ComponentFixture<RecipesByCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesByCountryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesByCountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
