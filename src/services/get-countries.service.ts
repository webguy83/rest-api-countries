import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry, IWorldData } from 'src/app/interfaces';
import { map, reduce, tap } from 'rxjs/operators';

interface ITranslation {
  br: string;
  de: string;
  es: string;
  fa: string;
  fr: string;
  hr: string;
  hu: string;
  it: string;
  ja: string;
  nl: string;
  pt: string;
}

interface IRegionalBloc {
  acronym: string;
  name: string;
}

interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface IFlag {
  png: string;
  svg: string;
}

interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

interface IResponse {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders?: string[];
  callingCodes: string[];
  capital?: string;
  cioc: string;
  currencies?: ICurrency[];
  demonym: string;
  flag: string;
  flags: IFlag;
  independant: boolean;
  languages: ILanguage[];
  latlng: number[];
  name: string;
  nativeName: string;
  numbericCode: string;
  population: number;
  region: string;
  regionalBlocs: IRegionalBloc[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: ITranslation[];
}

interface BorderCountry {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetCountriesService {
  constructor(private http: HttpClient) {}

  getCountries$() {
    return this.http
      .get<IResponse[]>('https://restcountries.com/v2/all')
      .pipe(map(this.convertData.bind(this)));
  }

  modifyCountryData(countries: IResponse[]) {
    const countryMap = countries.reduce((obj: BorderCountry, country) => {
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

  convertData(countries: IResponse[]) {
    const regions = countries.map((country) => {
      return country.region;
    });
    return {
      countries: this.modifyCountryData(countries),
      regions: [...new Set(regions)],
    };
  }
}
