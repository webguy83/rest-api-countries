import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRegionsInputComponent } from './filter-regions-input.component';

describe('FilterRegionsInputComponent', () => {
  let component: FilterRegionsInputComponent;
  let fixture: ComponentFixture<FilterRegionsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRegionsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRegionsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
