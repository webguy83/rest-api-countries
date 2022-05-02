import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ISanitizedCountriesData } from './interfaces';
import { CountryCardService } from './services/country-card.service';
import { GetCountriesService } from './services/get-countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  allCountries: ISanitizedCountriesData[] = [];
  filteredCountries: ISanitizedCountriesData[] = [];
  currentCountrySelected: ISanitizedCountriesData | null = null;
  constructor(
    private countryCardService: CountryCardService,
    private getCountriesService: GetCountriesService
  ) {}

  getCountries(countries$: Observable<ISanitizedCountriesData[]>) {
    countries$.subscribe({
      next: (filteredCountries) => {
        this.filteredCountries = filteredCountries;
      },
    });
  }
  ngOnInit(): void {
    this.getCountriesService.getCountries$.subscribe((data) => {
      this.allCountries = data.countries;
    });
    this.countryCardService.currentCardSelected.subscribe((country) => {
      this.currentCountrySelected = country;
    });
  }

  onSelectedCountry(country: ISanitizedCountriesData | null) {
    this.countryCardService.updateCurrentCard(country);
  }
}
