import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {

  constructor(private _playerService : PlayerService) { }

  player1 : IPlayer = this._playerService.getPlayer1();

  onClick(){
    this.player1 = this._playerService.onClick(this.player1);
    
  }

ngOnInit() {
  
}

}
