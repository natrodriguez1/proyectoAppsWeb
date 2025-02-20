import { TestBed } from '@angular/core/testing';

import { RecipesByLetterServiceService } from './recipes-by-letter-service.service';

describe('RecipesByLetterServiceService', () => {
  let service: RecipesByLetterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesByLetterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
