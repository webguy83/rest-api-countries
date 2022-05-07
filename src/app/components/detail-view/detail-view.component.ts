import { Component, Input, OnInit } from '@angular/core';
import { CountryCardService } from 'src/app/services/country-card.service';
import { GetCountriesService } from 'src/app/services/get-countries.service';
import { ISanitizedCountriesData } from '../../interfaces';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  allCountries: ISanitizedCountriesData[] = [];
  @Input() country: ISanitizedCountriesData | null = null;
  constructor(
    private countryCardService: CountryCardService,
    private getCountriesService: GetCountriesService
  ) {}

  ngOnInit(): void {
    this.getCountriesService.getCountries$.subscribe((data) => {
      this.allCountries = data.countries;
    });
  }

  backClick() {
    this.countryCardService.updateCurrentCard(null);
  }

  findCountry(country: string) {
    const borderCountry: ISanitizedCountriesData | undefined =
      this.allCountries.find((c) => {
        return c.name === country;
      });

    if (borderCountry) {
      this.countryCardService.updateCurrentCard(borderCountry);
    }
  }
}
