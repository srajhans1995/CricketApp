import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

import { Defineteam } from 'src/app/models/defineteam';
import {Defineteam1} from 'src/app/models/defineteam1';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  
  record=1;
  record1=1;
  @ViewChild('name') team1InTs:ElementRef;
  @ViewChild('designation') team2InTs:ElementRef;
  @ViewChild('name') team11InTs:ElementRef;
  @ViewChild('designation') team22InTs:ElementRef;
  pp;
  players: Array<Defineteam>;
  players1: Array<Defineteam1>;
  gg;
  constructor(
    private playerService:PlayerService,
    player:AdminService,
    private router:Router,
    private route:ActivatedRoute
    ){
      this.pp=playerService.playerlist;
      this.players =[];
      this.players1=[];
      this.gg=player.teams;
    }
    
    addPlayer(name,designation){
      this.record++;
      if(this.record<=12)
      {
        
        let data = new Defineteam(name,designation);
        this.players.push(data);
        
      }
    }
    
    
    addPlayer1(name1,designation1){
      this.record1++;
      if(this.record1<=12)
      {
        
        let data1 = new Defineteam1(name1,designation1);
        this.players1.push(data1);
        
      }
    }
    Team1Final()
    {
      this.playerService.playerlist(this.players);
      //console.log(this.players);
    }
    
    Team2Final()
    {
      this.playerService.playerlist11(this.players1);
     
    }
    
    onSubmitClicked()
    {
      this.playerService.playerlist11(this.players1);
      this.playerService.playerlist(this.players);
      
      this.router.navigate(['/admin/playerlist'],{relativeTo:this.route});
    }
    
    
    // delete()
    // {
    //   this.players.pop();
    // }
    // delete1()
    // {
    //   this.players1.pop();
    // }
    
    ngOnInit()
    {
      
    }
    
    
  }
  