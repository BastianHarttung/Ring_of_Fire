import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Game} from "src/models/game"

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  game:Game= new Game;

  constructor(private router: Router,
              private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  /**
   * Start New Game on Click on Start-Button
   * It takes the actual Date and Time as ISO String and pass it as
   *    Firestore Document in Collection games and saves a
   *    new Game with all variables in this Document
   * Then navigate to the Game Component
   */
  newGame() {
    // Start new game
    const date = new Date().toISOString().slice(0,19)

    this.game = new Game();
    this.firestore.collection('games')
      .doc(date)
      .set(this.game.toJson())
      .then( (gameInfo:any) => {
        this.router.navigateByUrl('game/'+ date)
      })
  }

}
