import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: string;
  rating1:boolean;
  rating2:boolean;
  rating3:boolean;
  rating4:boolean;
  rating5:boolean;
 

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
    //this.rating = this.rating.
    if(this.rating == 5){
      this.rating5 = true;
    }
    else if(this.rating < 5 || this.rating >=4){
      this.rating4 = true;
    }
    else if(this.rating < 4 || this.rating >=3){
      this.rating3 = true;
    }
    else if(this.rating < 3 || this.rating >=2){
      this.rating2 = true;
    }
    else if(this.rating < 2 || this.rating >=1){
      this.rating1 = true;
    }
  }
  
}
