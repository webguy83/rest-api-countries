import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetCountriesService } from 'src/app/services/get-countries.service';
import { IMainCountryData } from '../../interfaces';

@Component({
  selector: 'app-filter-countries-input',
  templateUrl: './filter-countries-input.component.html',
  styleUrls: ['./filter-countries-input.component.scss'],
})
export class FilterCountriesInputComponent implements OnInit {
  filteredCountries: IMainCountryData[] = [];
  @Input() countryControl = new FormControl();
  constructor(private getCountriesService: GetCountriesService) {}

  ngOnInit(): void {
    this.getCountriesService.filterCountries$.subscribe((countries) => {
      this.filteredCountries = countries;
    });
  }
}
