import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor, Director, Movies } from './movies.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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

  getMovie(id:Number) : Observable<Movies> {
    return this.http.get<Movies>(this.baseUrl+"movies"+id)
  }

  getActors() : Observable<Actor[]>{
    return this.http.get<Actor[]>(this.baseUrl+"actor")
    .pipe (
      tap(_ => console.log("Fetched actor's details"))
    );
  }

  getDirectors() : Observable<Director[]>{
    return this.http.get<Director[]>(this.baseUrl+"director")
    .pipe (
      tap(_ => console.log("Fetched director's details"))
    );
  }

  updateMovies(id:Number , value:Movies) : Observable<Movies>{
    return this.http.put<Movies>(this.baseUrl+"movies/"+id,value)
    .pipe (
      tap(_ => console.log("Successfully updated"))
    );
  }

  deleteMovies(id:number) : Observable<any>{
    return this.http.delete(this.baseUrl+"movies/"+id);

  }
}
