export interface ITranslation {
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

export interface IRegionalBloc {
  acronym: string;
  name: string;
}

export interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface IFlag {
  png: string;
  svg: string;
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface IResponse {
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

export interface ISanitizedCountriesData {
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borderCountries: string[];
  flags: IFlag;
}

export interface IBorderCountry {
  [key: string]: string;
}

export interface ICardData {
  image: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}
