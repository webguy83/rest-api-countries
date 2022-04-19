import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ISanitizedCountriesData } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countries: ISanitizedCountriesData[] = [];
  getCountries(countries: Observable<ISanitizedCountriesData[]>) {
    countries.subscribe({
      next: (filteredCountries) => {
        this.countries = filteredCountries;
      },
    });
  }
  ngOnInit(): void {}
}
