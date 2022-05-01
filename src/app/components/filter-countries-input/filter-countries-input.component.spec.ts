import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCountriesInputComponent } from './filter-countries-input.component';

describe('FilterCountriesInputComponent', () => {
  let component: FilterCountriesInputComponent;
  let fixture: ComponentFixture<FilterCountriesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCountriesInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCountriesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
