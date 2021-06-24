import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    AddMoviesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModuleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  entryComponents:[ DetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
