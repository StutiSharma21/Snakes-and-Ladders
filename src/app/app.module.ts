import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { BoardComponent } from './board/board.component';

import { PlayerService } from './player.service';
import { BlockService } from './block.service';


@NgModule({
  declarations: [
    AppComponent,
    Player1Component,
    Player2Component,
    BoardComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
