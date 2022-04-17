export interface ICountry {
  region: string;
}

interface ICountryData {
  borders: string[];
  capital: string;
  currencies: string;
  flag: string;
  languages: string;
  name: string;
  nativeName: string;
  region: string;
  population: string;
  subregion: string;
  topLevelDomain: string;
}

export interface IWorldData {
  regions: string[];
  countries: ICountryData[];
}
