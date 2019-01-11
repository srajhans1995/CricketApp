import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CommentryComponent } from './commentry/commentry.component';
import {InfoformComponent} from './admin/infoform/infoform.component';
import { PlayerlistComponent } from './admin/playerlist/playerlist.component';
import { SummaryformComponent } from './admin/summaryform/summaryform.component';

const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch:'full'},
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {path:'new',component:InfoformComponent},
      {path:'defineTeams', component:PlayerlistComponent},
      {path:'playerlist', component:SummaryformComponent}
    ]
  },
  {
    path:'scorecard',
    component:ScorecardComponent
  },
  {
    path:'commentry',
    component:CommentryComponent
  },
  {path:'**', redirectTo:'header'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
