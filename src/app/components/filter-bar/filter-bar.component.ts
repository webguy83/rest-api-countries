import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { GetCountriesService } from '../../services/get-countries.service';
import { ISanitizedCountriesData } from '../../interfaces';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  regions: string[] = [];
  countries: ISanitizedCountriesData[] = [];
  modifiedCountries: ISanitizedCountriesData[] = [];
  selectedRegion: string = 'all';

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

  private _filter(val: string): ISanitizedCountriesData[] {
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

  onRegionChange(evt: Event) {
    this.selectedRegion = (evt.target as HTMLInputElement).value;

    this.modifiedCountries = this.countries.filter((country) => {
      return (
        country.region === this.selectedRegion ||
        this.selectedRegion === 'all' ||
        this.selectedRegion === ''
      );
    });
    this._filterCountries();
  }
}
