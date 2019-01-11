import { Injectable } from '@angular/core';
import { Scorecard } from '../models/scorecard';

@Injectable({
  providedIn: 'root'
})
export class ScorecardService {

  scr:Array<Scorecard>=[];

  constructor() { }

  scoreDetails(name:String,name1:String,balls:any,runs:any,overs:any)
  {
    this.scr.push(new Scorecard(name,name1,balls,runs,overs));
    console.log(this.scr);
  }

}
