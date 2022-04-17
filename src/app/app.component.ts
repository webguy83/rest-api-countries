import { Component, OnInit } from '@angular/core';
import { GetCountriesService } from 'src/services/get-countries.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  regions: string[] = [];
  countries: string[] = [];
  control = new FormControl();
  constructor(private getCountriesService: GetCountriesService) {}
  ngOnInit(): void {
    this.getCountriesService.getCountries$().subscribe({
      next: (data) => {
        this.regions = data.regions;
        this.countries = data.countries.map((country) => country.name);
      },
    });
  }
}
