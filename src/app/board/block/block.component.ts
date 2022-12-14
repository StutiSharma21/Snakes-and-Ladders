import { Component } from '@angular/core';
import { IBlock } from 'src/app/block';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {

  blocks : IBlock | undefined;

}
