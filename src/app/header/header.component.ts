import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { LocalStorageService } from 'src/services/local-storage.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark: boolean = this.localStorageService.getItem('isDark');
  baseClassList = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.baseClassList = this.document.body.classList.toString();
    this.alterTheme();
  }

  switchMode() {
    this.isDark = !this.isDark;
    this.alterTheme();
    this.localStorageService.setItem('isDark', this.isDark);
  }

  alterTheme() {
    const darkOrLight = `theme-${this.isDark ? 'dark' : 'light'}`;
    this.renderer.setAttribute(
      this.document.body,
      'class',
      `${this.baseClassList} ${darkOrLight}`
    );
  }
}
