import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {AdminService} from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

//import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-infoform',
  templateUrl: './infoform.component.html',
  styleUrls: ['./infoform.component.css']
})
export class InfoformComponent implements OnInit {
  
  @ViewChild('team1') team1InTs:ElementRef;
  @ViewChild('team2') team2InTs:ElementRef;
  @ViewChild('toss') tossInTs:ElementRef;
  @ViewChild('decision') decisionInTs:ElementRef;
  @ViewChild('overs') oversInTs:ElementRef;
  t1;
  t2;
  t11;
  t22;
  constructor(
    private adminService:AdminService,
    private router:Router,
    private route:ActivatedRoute){}
    
    
    ngOnInit() {
    }
    
    onSubmitClicked(){
      
      this.adminService.scorecard(
        (<HTMLInputElement>this.team1InTs.nativeElement).value,
        (<HTMLInputElement>this.team2InTs.nativeElement).value,
        (<HTMLInputElement>this.tossInTs.nativeElement).value,
        (<HTMLInputElement>this.decisionInTs.nativeElement).value,
        (<HTMLInputElement>this.oversInTs.nativeElement).valueAsNumber
        
        );
        console.log("in infoform");
        this.router.navigate(['/admin/defineTeams'],{relativeTo:this.route});
      }
      myfun()
      {
        
        this.t1=<HTMLInputElement>this.team1InTs.nativeElement.value;
        
        this.t2=<HTMLInputElement>this.team2InTs.nativeElement.value;
        
      }
      
      showTeam()
      {
        if(this.t1==this.t11)
        {
          
        }
        else
        {
          
        }
      }
    }
    
    