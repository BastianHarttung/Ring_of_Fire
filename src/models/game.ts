export class Game {
  public players: object[] = [
    /*{ name: 'Player 1',
    pic: 'Profile_Drunk01.png'}*/
  ];

  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
      this.stack.push('hearts_' + i);
      this.stack.push('spade_' + i);
    }
    shuffle(this.stack);
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
