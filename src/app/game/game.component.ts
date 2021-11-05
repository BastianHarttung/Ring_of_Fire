import {Component, OnInit} from '@angular/core';
import {Game} from 'src/models/game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  playedCard: any = '';
  pickCardAnimation: boolean = false;
  game: Game = new Game;

  constructor() {

  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game)
  }

  takeCard() {

    if (!this.pickCardAnimation) {

      this.playedCard = this.game.stack.pop();

      this.pickCardAnimation = true

      setTimeout(() => {
        this.game.playedCards.push(this.playedCard);
        this.pickCardAnimation = false
      }, 1500)
    }
  }

}
