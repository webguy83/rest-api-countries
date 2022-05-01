import { EventEmitter, Injectable } from '@angular/core';
import { ISanitizedCountriesData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryCardService {
  currentCardSelected = new EventEmitter<ISanitizedCountriesData | null>();
  constructor() {}

  updateCurrentCard(countryData: ISanitizedCountriesData | null) {
    this.currentCardSelected.emit(countryData);
  }
}
