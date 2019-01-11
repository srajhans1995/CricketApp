import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin';
import { CommentryService } from 'src/app/services/commentry.service';

@Component({
  selector: 'app-summaryform',
  templateUrl: './summaryform.component.html',
  styleUrls: ['./summaryform.component.css']
})
export class SummaryformComponent implements OnInit {
  balls = 1;
  wicketType;
  catchBy;
  numovers = 0;
  numballs=1;
  runs;
  w1;
  c1;
  array = [1, 2, 3, 4, 5, 6];
  
  private txtOver:boolean=true;
  private txtBalls:boolean=true;
  showBowler: boolean = true;
  showWicketType: boolean = false;
  showCatchBy: boolean = false;
  adminService: AdminService;
  
  playerService: PlayerService;
  playerlist1;
  playerlist2;
  @ViewChild('overs') oversInTs:ElementRef;
  @ViewChild('runs') runsInTs:ElementRef;
  @ViewChild('balls') ballsInTs:ElementRef;
  @ViewChild('wicket') wicketInFs:ElementRef;
  @ViewChild('catch') catchInFs:ElementRef;
  @ViewChild('bowlerName') bowlerNameInFs:ElementRef;
  @ViewChild('commentry') commentryInTs:ElementRef;
  
  constructor(
    playerService: PlayerService,
    adminService: AdminService,
    private commen:CommentryService,
    public player1: PlayerService) {
      this.adminService = adminService;
      this.playerlist1 = player1.team11;
      this.playerlist2 = player1.team22;
    }
    
   
    ngOnInit() {
    }
    
    onRunsClick()
    {
      this.w1=((<HTMLInputElement>this.runsInTs.nativeElement).value);
      //this.showBowler=true;
      if(this.w1=='Wicket')
      {
        this.showWicketType = !this.showWicketType;
        this.showWicketType = true;
      }
      else{
        this.showWicketType=false;
        
      }
      
    }
    
    onWicketType()
    {
      this.c1 = ((<HTMLInputElement>this.wicketInFs.nativeElement).value);
      if (this.c1 == 'Catch') {
        
        this.showCatchBy=true;
        
      }
      else {
        this.showCatchBy = false;
      }
      
    }
    
    
    onSubmitClicked() {
      this.numballs++;
      if (this.numballs > 6) {
        this.numballs=1;
        //this.showBowler = true;
        this.numovers++;
        this.showBowler = true;
        
      }
      else if (this.numballs > 0) {
        for (let numballs = 0; numballs < this.array.length; numballs++) {
          this.showBowler = false;
          console.log(this.array[numballs]);
        }
        
      } else {
        this.showBowler = false;
      }
      //this.overs++;
      
      
      this.showWicketType = false;
      this.showCatchBy=false;
      
      this.commen.commentry((<HTMLInputElement>this.ballsInTs.nativeElement).value,
      (<HTMLInputElement>this.runsInTs.nativeElement).value,(<HTMLInputElement>this.oversInTs.nativeElement).value,(<HTMLInputElement>this.commentryInTs.nativeElement).value)
      
      
      console.log("added");
      
      
    }
    
    
    
  }