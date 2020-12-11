import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
