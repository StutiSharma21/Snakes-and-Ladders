import { Injectable } from '@angular/core';
import { withRouterConfig } from '@angular/router';
import { IBlock } from './block';


@Injectable({
  providedIn: 'root'
})
export class BlockService {

  
    blocks : IBlock[] = [];
    constructor(){

      this.blocks.push({
        "value" : 0,
        "isSnakeHead" : false,
        "SnakeTail" : 0,
        "LadderHead" : 0,
        "isLadderTail" : false,
      }
      )
      for(let i = 1; i <= 100 ; i++){
          let newBlock = {
            "value" : i,
            "isSnakeHead" : false,
            "SnakeTail" : 0,
            "LadderHead" : 0,
            "isLadderTail" : false,
          };
          this.blocks.push(newBlock);
        }
        console.log(this.blocks);
        // snake 1
        this.blocks[17].isSnakeHead = true;
        this.blocks[17].SnakeTail = 7;
        // snake 2
        this.blocks[64].isSnakeHead = true;
        this.blocks[64].SnakeTail = 60;
        // snake 3
        this.blocks[54].isSnakeHead = true;
        this.blocks[54].SnakeTail = 34;
        // ladder 1
        this.blocks[4].isLadderTail = true;
        this.blocks[4].LadderHead = 14;
        // ladder 2
        this.blocks[28].isLadderTail = true;
        this.blocks[28].LadderHead = 84;
        // ladder 3
        this.blocks[80].isLadderTail = true;
        this.blocks[80].LadderHead = 99;
    }
    getBlocks(){
      return this.blocks;
    }
  }

  

