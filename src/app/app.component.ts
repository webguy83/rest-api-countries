import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ISanitizedCountriesData } from './interfaces';
import { CountryCardService } from './services/country-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countries: ISanitizedCountriesData[] = [];
  currentCountrySelected: ISanitizedCountriesData | null = null;
  constructor(private countryCardService: CountryCardService) {}

  getCountries(countries: Observable<ISanitizedCountriesData[]>) {
    countries.subscribe({
      next: (filteredCountries) => {
        this.countries = filteredCountries;
      },
    });
  }
  ngOnInit(): void {
    this.countryCardService.currentCardSelected.subscribe((country) => {
      this.currentCountrySelected = country;
    });
  }

  onSelectedCountry(country: ISanitizedCountriesData | null) {
    this.countryCardService.updateCurrentCard(country);
  }
}
