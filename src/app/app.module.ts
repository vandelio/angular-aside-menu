import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/// ngxs State
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { SearchState } from './search.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialCombinedModule } from 'src/material.module';
import { AppComponent } from './app.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { RandomSvgBlobComponent } from './random-svg-blob/random-svg-blob.component';
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AsideMenuComponent,
    RandomSvgBlobComponent,
    TestComponent,
    HomeComponent,
    SearchbarComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([SearchState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    BrowserAnimationsModule,
    MaterialCombinedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
