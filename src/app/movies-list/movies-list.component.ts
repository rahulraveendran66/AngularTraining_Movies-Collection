
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {  Movies } from '../movies.model';
import { Router } from '@angular/router';
import {MatTable} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesService } from '../movies.service';

import { DetailsComponent } from '../details/details.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  movies: Movies[]=[];
  displayArray = [ 'movie', 'actor', 'director', 'language','year','action'];
  dataSource =new MatTableDataSource(this.movies);

  @ViewChild(MatTable)
  table!: MatTable<Movies>;



  constructor( private moviesService : MoviesService,public dialog: MatDialog ,private router: Router) { }

  openDialog(movie: Movies){
    // this.dialog.open(DetailsComponent,{data :movie});
    const dialogRef: MatDialogRef<DetailsComponent> = this.dialog.open(DetailsComponent,{data :movie});
    dialogRef.componentInstance.updateEvent.subscribe(()=>this.getMoviesList());
  }



  getMoviesList() :void {
    this.moviesService.getMoviesList()
    .subscribe(movies => {
      this.movies=movies;
      this.dataSource.data = movies as Movies[];
      });

  }

  deleteMoviesById(id:number){
    this.moviesService.deleteMovies(id)
    .subscribe(data => {
      console.log(data);
      this.getMoviesList();

    });

  }

  navigateToAddMovies() : void{
    this.router.navigateByUrl('add-movies');
  }

  ngOnInit(): void {
    this.getMoviesList();
  }

}



