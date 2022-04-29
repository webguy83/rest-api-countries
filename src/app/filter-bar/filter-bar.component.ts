import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { GetCountriesService } from 'src/services/get-countries.service';
import { ISanitizedCountriesData } from '../interfaces';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  @Output() countriesEvent = new EventEmitter<
    Observable<ISanitizedCountriesData[]>
  >();
  regions: string[] = [];
  selectedRegion: string = 'all';
  countries: ISanitizedCountriesData[] = [];
  modifiedCountries: ISanitizedCountriesData[] = [];
  filteredCountries: Observable<ISanitizedCountriesData[]> | null = null;
  selectRegionIsOpen: boolean = false;

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
    this.filteredCountries = this.countryControl.valueChanges.pipe(
      startWith(''),
      map((val) => this._filter(val))
    );
    this.countriesEvent.emit(this.filteredCountries);
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

  onRegionClick() {
    this.selectRegionIsOpen = !this.selectRegionIsOpen;
  }

  onRegionBlur() {
    this.selectRegionIsOpen = false;
  }
}
