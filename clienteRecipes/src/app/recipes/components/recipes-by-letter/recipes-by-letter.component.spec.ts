import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesByLetterComponent } from './recipes-by-letter.component';

describe('RecipesByLetterComponent', () => {
  let component: RecipesByLetterComponent;
  let fixture: ComponentFixture<RecipesByLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesByLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
