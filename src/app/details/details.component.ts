import { Component, Inject, OnInit, Output , EventEmitter } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movies } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  value:Movies={}
  submitted=false;
  public isupdate!: boolean;
  @Output() updateEvent=new EventEmitter<void>()
  constructor(@Inject(MAT_DIALOG_DATA) public data: Movies ,private moviesService : MoviesService) { }

  update(id:Number){
    if(id!==-1){
    this.moviesService.updateMovies(id,this.value)
    .subscribe(value=> {
      this.value=value;
      this.updateEvent.next();
    });
    }
  }

  edit(){
    this.isupdate=true;

  }

  ngOnInit(): void {
    this.value= JSON.parse(JSON.stringify(this.data));
  }

}
