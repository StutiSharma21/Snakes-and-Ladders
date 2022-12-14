import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPlayer } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {

  constructor(private _playerService : PlayerService) { }
  @Output() playerValue1=new EventEmitter();
  player1 : IPlayer = this._playerService.getPlayer1();
  position1=this.player1.atValue;

  onClick(){
    this.player1 = this._playerService.onClick(this.player1);
    this.playerValue1.emit(this.player1.atValue);
    
  }

ngOnInit() {
  
}

}
