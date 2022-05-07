import { Component, OnInit } from '@angular/core';
import { ISanitizedCountriesData } from './interfaces';
import { CountryCardService } from './services/country-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentCountrySelected: ISanitizedCountriesData | null = null;
  constructor(private countryCardService: CountryCardService) {}

  ngOnInit(): void {
    this.countryCardService.currentCardSelected.subscribe((country) => {
      this.currentCountrySelected = country;
    });
  }
}
