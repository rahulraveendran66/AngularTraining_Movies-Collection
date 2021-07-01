import { Component, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';
import { Movies,Actor,Director } from '../movies.model';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  movie: Movies={}
  actors: Actor[]=[]
  directors: Director[]=[]

  submitted = false;
  constructor(private moviesService: MoviesService, private actorService: MoviesService,private directorService: MoviesService,private location:Location) { }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.moviesService.createMovies(this.movie)
    .subscribe(()=>this.goBack());
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

  getActors(): void{
    this.actorService.getActors()
    .subscribe(actors=>{
      console.log(actors);
      this.actors=actors;});
  }

  getDirectors(): void{
    this.directorService.getDirectors()
    .subscribe(directors=>this.directors=directors);
  }

  ngOnInit(): void {
    this.getActors();
    this.getDirectors();
  }
}
