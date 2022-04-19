import { Component, Input, OnInit } from '@angular/core';
import { ICardData, ISanitizedCountriesData } from '../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() countryData: ISanitizedCountriesData | null = null;
  constructor() {}

  ngOnInit(): void {}
}
