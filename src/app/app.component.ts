import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { GetCountriesService } from 'src/services/get-countries.service';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDark: boolean = this.localStorageService.getItem('isDark');
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private localStorageService: LocalStorageService,
    private getCountriesService: GetCountriesService
  ) {}

  ngOnInit(): void {
    this.alterTheme();
    this.getCountriesService.getCountries$().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  switchMode() {
    this.isDark = !this.isDark;
    this.alterTheme();
    this.localStorageService.setItem('isDark', this.isDark);
  }

  alterTheme() {
    const darkOrLight = `theme-${this.isDark ? 'dark' : 'light'}`;
    this.renderer.setAttribute(this.document.body, 'class', darkOrLight);
  }
}
