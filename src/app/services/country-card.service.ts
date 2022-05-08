import { EventEmitter, Injectable } from '@angular/core';
import { IMainCountryData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryCardService {
  currentCardSelected = new EventEmitter<IMainCountryData | null>();
  constructor() {}

  updateCurrentCard(countryData: IMainCountryData | null) {
    this.currentCardSelected.emit(countryData);
  }
}
