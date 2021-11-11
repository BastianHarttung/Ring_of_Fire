import {Component, OnInit} from '@angular/core';
import {Game} from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import {DialogAddPlayerComponent} from "../dialog-add-player/dialog-add-player.component";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  playedCard: any = '';
  pickCardAnimation: boolean = false;
  game: Game = new Game;

  constructor(public dialog: MatDialog) {

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
        this.game.lastPlayer = this.game.currentPlayer;
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      }, 1500)

      setTimeout(() => {
        this.game.playedCards.push(this.playedCard);
        this.pickCardAnimation = false
      }, 1500)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((playername: string) => {   // playername ist der String, der in das Inputfeld von Dialog-add-player eingegeben wurde.
      const randomPic = Math.round(1 + Math.random() * 3)
      const newPlayer = {name: playername, pic: `Profile_Drunk0${randomPic}.png`}
      this.game.players.push(newPlayer)
    });
  }

}
