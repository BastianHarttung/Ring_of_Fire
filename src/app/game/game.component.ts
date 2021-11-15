import {Component, OnInit} from '@angular/core';
import {Game} from 'src/models/game';

import {MatDialog} from '@angular/material/dialog';
import {DialogAddPlayerComponent} from "../dialog-add-player/dialog-add-player.component";

import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  game: Game = new Game;
  gameId:string = '';

  constructor(private route: ActivatedRoute,
              private firestore: AngularFirestore,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.game = new Game();

    this.route.params.subscribe((params) => {
      this.gameId = params.id;
      this.firestore.collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game:any) =>{
          //console.log('Game update', game);
          this.game.players = game.players;
          this.game.stack = game.stack;
          this.game.playedCards = game.playedCards;
          this.game.currentPlayer = game.currentPlayer;
          this.game.lastPlayer = game.lastPlayer;
          this.game.playedCard = game.playedCard;
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.cardsPlayed = game.cardsPlayed});
    })
  }

  takeCard() {

    if (!this.game.pickCardAnimation && this.game.cardsPlayed < 52 && this.game.players.length > 0) {

      this.game.playedCard = this.game.stack.pop();
      this.game.pickCardAnimation = true
      this.saveGameToDB();

      setTimeout(() => {
        this.game.lastPlayer = this.game.currentPlayer;
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        this.game.playedCards.push(this.game.playedCard);
        this.game.pickCardAnimation = false;
        this.game.cardsPlayed ++;
        this.saveGameToDB();
      }, 1500)

    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((playername: string) => {   // playername ist der String, der in das Inputfeld von Dialog-add-player eingegeben wurde.
      const randomPic = Math.round(1 + Math.random() * 3)
      const newPlayer = {name: playername, pic: `Profile_Drunk0${randomPic}.png`}
      if (playername && playername.length > 0) {
        this.game.players.push(newPlayer);
        this.saveGameToDB();
      }
    });
  }

  saveGameToDB() {
    this.firestore.collection('games')
      .doc(this.gameId)
      .update(this.game.toJson())
  }

}
