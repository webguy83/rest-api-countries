import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISanitizedCountriesData } from 'src/app/interfaces';
import { GetCountriesService } from 'src/app/services/get-countries.service';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrls: ['./card-area.component.scss'],
})
export class CardAreaComponent implements OnInit {
  filteredCountries: ISanitizedCountriesData[] = [];

  constructor(private getCountriesService: GetCountriesService) {}

  ngOnInit(): void {
    this.getCountriesService.filterCountries$.subscribe((countries) => {
      this.filteredCountries = countries;
    });
  }
}
