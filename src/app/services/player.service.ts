import { Injectable } from '@angular/core';
import { Defineteam } from '../models/defineteam';
import { Defineteam1 } from '../models/defineteam1';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  team11: Array<Defineteam> = [];
  
  team22:Array<Defineteam1>= [];
  constructor() { }
  
  
  playerlist(team11:Array<Defineteam>){
    
    this.team11=team11;
    console.log(this.team11);
  }
  playerlist11(team22:Array<Defineteam1>){
    this.team22=team22;
    console.log(this.team22);
  }
  
  
  
}
