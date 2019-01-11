import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CommentryComponent } from './commentry/commentry.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { InfoformComponent } from './admin/infoform/infoform.component';
import { PlayerlistComponent } from './admin/playerlist/playerlist.component';
import { NewbuttonComponent } from './admin/newbutton/newbutton.component';
import { SummaryformComponent } from './admin/summaryform/summaryform.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    CommentryComponent,
    AdminComponent,
    HeaderComponent,
    InfoformComponent,
    PlayerlistComponent,
    NewbuttonComponent,
    SummaryformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
