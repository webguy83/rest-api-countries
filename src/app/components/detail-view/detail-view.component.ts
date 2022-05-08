import { Component, Input, OnInit } from '@angular/core';
import { CountryCardService } from 'src/app/services/country-card.service';
import { GetCountriesService } from 'src/app/services/get-countries.service';
import { IMainCountryData } from '../../interfaces';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  allCountries: IMainCountryData[] = [];
  @Input() country: IMainCountryData | null = null;
  constructor(
    private countryCardService: CountryCardService,
    private getCountriesService: GetCountriesService
  ) {}

  ngOnInit(): void {
    this.getCountriesService.getCountriesHttp.subscribe((data) => {
      this.allCountries = data.countries;
    });
  }

  backClick() {
    this.countryCardService.updateCurrentCard(null);
  }

  findCountry(country: string) {
    const borderCountry: IMainCountryData | undefined = this.allCountries.find(
      (c) => {
        return c.name === country;
      }
    );

    if (borderCountry) {
      this.countryCardService.updateCurrentCard(borderCountry);
    }
  }
}
