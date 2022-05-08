import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryCardService } from 'src/app/services/country-card.service';
import { IMainCountryData } from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() countryData!: IMainCountryData;
  constructor(private countryCardService: CountryCardService) {}

  ngOnInit(): void {}

  onCardClick() {
    this.countryCardService.updateCurrentCard(this.countryData);
  }
}
