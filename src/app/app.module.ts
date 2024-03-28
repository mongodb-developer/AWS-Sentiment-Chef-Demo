import { NgModule } from '@angular/core';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GuidedTourModule, GuidedTourService } from 'ngx-guided-tour';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantsListGuidedComponent } from './restaurants-list-guided/restaurants-list-guided.component';
import { RestaurantDetailsGuidedComponent } from './restaurant-details-guided/restaurant-details-guided.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    RestaurantDetailsComponent,
    ReviewFormComponent,
    NavbarComponent,
    RestaurantsListGuidedComponent,
    RestaurantDetailsGuidedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    GuidedTourModule,
  ],
  providers: [
    provideImgixLoader("***REMOVED***"),
    GuidedTourService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
