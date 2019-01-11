import { Component, OnInit } from '@angular/core';
import { CommentryService } from '../services/commentry.service';

@Component({
  selector: 'app-commentry',
  templateUrl: './commentry.component.html',
  styleUrls: ['./commentry.component.css']
})
export class CommentryComponent implements OnInit {
  
  commentry:CommentryService;
  ccm;
  constructor(public commen:CommentryService)
  {
    this.ccm=commen.comm;
  }
  ngOnInit() {
  }
  
}
