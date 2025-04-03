import { TestBed } from '@angular/core/testing';

import { RegisterRecipeService } from './register-recipe.service';

describe('RegisterRecipeService', () => {
  let service: RegisterRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
