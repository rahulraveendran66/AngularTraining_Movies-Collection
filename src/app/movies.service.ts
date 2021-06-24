import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from './movies';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = "http://localhost:8080/api/v1/"

  constructor( private http : HttpClient ) { }

  createMovies(movie:Movies) : Observable<Movies>{
    return this.http.post<Movies>(this.baseUrl+"movies",movie)
    .pipe (
      tap(_ => console.log("Successfully created"))
    );
    }

  getMoviesList() : Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseUrl+"movies")
    .pipe (
      tap(_ => console.log("Fetched all movies list"))
    );

  }
}
