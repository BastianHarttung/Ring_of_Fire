import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player:any;
  @Input() playerActive:boolean = false;

  @Input() game:any;

  constructor() { }

  ngOnInit(): void {
  }

  deletePlayer() {
    const playerIndex = this.game.players.indexOf(this.player);
    this.game.players.splice(playerIndex,1)
  }

}
