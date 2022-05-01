import { TestBed } from '@angular/core/testing';

import { CountryCardService } from './country-card.service';

describe('CountryCardService', () => {
  let service: CountryCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
