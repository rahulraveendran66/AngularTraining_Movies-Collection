import { Component, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  movie: Movies={}//{ movie:'',actor:'',director:'',language:'', year:2010 };
  // model = ['movie','actor','director','language','year'];
  submitted = false;
  constructor(private moviesService: MoviesService,private location:Location) { }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.moviesService.createMovies(this.movie)
    .subscribe();
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

  ngOnInit(): void {
  }
}
