import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { DetailsComponent } from './details/details.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';

const routes: Routes = [
  { path:'', redirectTo:'/movies', pathMatch: 'full'},
  { path: 'movies', component:MoviesListComponent},
  { path: 'add-movies', component:AddMoviesComponent},
  { path: 'details', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
