export class Game {
  public players: object[] = [
    /*{
      name: 'Player 1',
      pic: 'Profile_Drunk01.png'
    },
    {
      name: 'Player 2',
      pic: 'Profile_Drunk02.png'
    },
    {
      name: 'Player 3',
      pic: 'Profile_Drunk03.png'
    }*/
  ];

  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;
  public lastPlayer: number = -1;

  public playedCard: any = '';
  public pickCardAnimation: boolean = false;

  public cardsPlayed:number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
      this.stack.push('hearts_' + i);
      this.stack.push('spade_' + i);
    }
    shuffle(this.stack);
  }

  public toJson() {
    return {
      players: this.players,
      stack: this.stack,
      playedCards: this.playedCards,
      currentPlayer: this.currentPlayer,
      lastPlayer: this.lastPlayer,
      playedCard: this.playedCard,
      pickCardAnimation: this.pickCardAnimation,
      cardsPlayed: this.cardsPlayed
    }
  }
}

function shuffle(stack: string[]) {
  let currentIndex = stack.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = stack[currentIndex];
    stack[currentIndex] = stack[randomIndex];
    stack[randomIndex] = temporaryValue;
  }

  return stack
}
