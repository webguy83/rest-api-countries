import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IBorderCountry,
  IResponse,
  IMainCountryData,
} from 'src/app/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetCountriesService {
  filterCountries$ = new EventEmitter<IMainCountryData[]>();
  constructor(private http: HttpClient) {}

  getCountries$ = this.http
    .get<IResponse[]>('https://restcountries.com/v2/all')
    .pipe(map(this._convertData.bind(this)));

  private _modifyCountryData(countries: IResponse[]): IMainCountryData[] {
    const countryMap = countries.reduce((obj: IBorderCountry, country) => {
      obj[country.alpha3Code] = country.name;
      return obj;
    }, {});
    return countries.map((country) => {
      return {
        name: country.name,
        nativeName: country.nativeName,
        population: country.population.toLocaleString('en-US'),
        region: country.region,
        subregion: country.subregion,
        capital: country.capital ? country.capital : '',
        topLevelDomain: country.topLevelDomain.join(', '),
        currencies: country.currencies
          ? country.currencies.map((currency) => currency.code).join(', ')
          : '',
        languages: country.languages
          .map((language) => language.name)
          .join(', '),
        borderCountries: country.borders
          ? country.borders.map((borderCountry) => countryMap[borderCountry])
          : [],
        flags: country.flags,
      };
    });
  }

  private _convertData(countries: IResponse[]) {
    const regions = countries
      .map((country) => {
        return country.region;
      })
      .sort((a, b) => a.localeCompare(b));
    return {
      countries: this._modifyCountryData(countries),
      regions: [...new Set(regions)],
    };
  }
}
