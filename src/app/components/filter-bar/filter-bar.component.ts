import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { GetCountriesService } from '../../services/get-countries.service';
import { IMainCountryData } from '../../interfaces';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  regions: string[] = [];
  countries: IMainCountryData[] = [];
  modifiedCountries: IMainCountryData[] = [];

  countryControl = new FormControl();

  constructor(private getCountriesService: GetCountriesService) {}

  ngOnInit(): void {
    this.getCountriesService.getCountries$.subscribe({
      next: (data) => {
        this.regions = data.regions;
        this.countries = data.countries;
        this.modifiedCountries = this.countries;

        this._filterCountries();
      },
    });
  }

  private _filter(val: string): IMainCountryData[] {
    const filterVal = val.toLowerCase();

    return this.modifiedCountries.filter((country) => {
      return country.name.toLowerCase().indexOf(filterVal) === 0;
    });
  }

  _filterCountries() {
    this.countryControl.valueChanges
      .pipe(
        startWith(''),
        map((val) => this._filter(val))
      )
      .subscribe({
        next: (filteredCountries) => {
          this.getCountriesService.filterCountries$.emit(filteredCountries);
        },
      });
  }

  onRegionChange(region: string) {
    this.modifiedCountries = this.countries.filter((country) => {
      return country.region === region || region === 'All' || region === '';
    });
    this._filterCountries();
  }
}
