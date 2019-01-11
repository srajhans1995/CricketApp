import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-newbutton',
  templateUrl: './newbutton.component.html',
  styleUrls: ['./newbutton.component.css']
})
export class NewbuttonComponent implements OnInit {
  
  constructor(private router:Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
  }
  
  
  onNewButtonClick()
  {
    this.router.navigate(['/admin/new'],{ relativeTo: this.route});
    console.log("in new button");
  }
}
