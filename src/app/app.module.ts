import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { FilterCountriesInputComponent } from './components/filter-countries-input/filter-countries-input.component';
import { FilterRegionsInputComponent } from './components/filter-regions-input/filter-regions-input.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterBarComponent,
    CardComponent,
    FilterCountriesInputComponent,
    FilterRegionsInputComponent,
    DetailViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
