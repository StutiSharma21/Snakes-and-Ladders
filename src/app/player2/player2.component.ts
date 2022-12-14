import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPlayer } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit{
  
  constructor(private _playerService : PlayerService) { }
  @Output() playerValue2=new EventEmitter();

  player2 : IPlayer = this._playerService.getPlayer2();
  position2=this.player2.atValue;

 
 
  onClick(){
    this.player2 = this._playerService.onClick(this.player2);
    this.playerValue2.emit(this.player2.atValue);
  }  

  ngOnInit() {
  }

}




