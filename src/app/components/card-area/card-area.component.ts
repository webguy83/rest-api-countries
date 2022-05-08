import { Component, HostListener, OnInit } from '@angular/core';
import { IMainCountryData } from 'src/app/interfaces';
import { GetCountriesService } from 'src/app/services/get-countries.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrls: ['./card-area.component.scss'],
})
export class CardAreaComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  documentClick(event: Event): void {
    this.utilitiesService.documentClickedTarget.emit(
      event.target as HTMLElement
    );
  }

  filteredCountries: IMainCountryData[] = [];

  constructor(
    private getCountriesService: GetCountriesService,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.getCountriesService.filterCountries$.subscribe((countries) => {
      this.filteredCountries = countries;
    });
  }
}
