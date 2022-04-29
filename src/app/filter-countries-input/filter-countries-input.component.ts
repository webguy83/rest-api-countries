import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ISanitizedCountriesData } from '../interfaces';

@Component({
  selector: 'app-filter-countries-input',
  templateUrl: './filter-countries-input.component.html',
  styleUrls: ['./filter-countries-input.component.scss'],
})
export class FilterCountriesInputComponent implements OnInit {
  @Input() filteredCountries: Observable<ISanitizedCountriesData[]> | null =
    null;
  @Input() countryControl = new FormControl();
  constructor() {}

  ngOnInit(): void {}
}
