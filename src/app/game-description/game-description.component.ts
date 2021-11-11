import {Component, Input, OnInit, OnChanges} from '@angular/core';


@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit, OnChanges {

  cardAction = [
    {card: '1', title: 'Wasserfall', subtitle: 'Alle trinken einen Wasserfall', description: ' Alle Spieler setzen zum trinken an. Im Uhrzeigersinn darf erst dann mit dem Trinken aufgehört werden, wenn der rechte Sitznachbar davor seinen Wasserfall beendet hat. Der Spieler, der das Ass zieht darf zu erst aufhören zu trinken (wann er will).' },
    {card: '2', title: '2 is for You', subtitle: 'Bestimme einen Trinker', description: 'Du darfst eine Person bestimmen, die einen Schluck aus ihrem Getränk nimmt.' },
    {card: '3', title: '3 is Me', subtitle: 'Du musst Trinken', description: 'Du musst einen kräftigen Schluck trinken' },
    {card: '4', title: '4 is Floor', subtitle: 'Berührt den Boden', description: 'Berühre mit deiner Hand den Boden. Der Mitspieler, der zuletzt den Boden berührt, muss einen Schluck trinken.' },
    {card: '5', title: '5 is Thumbmaster', subtitle: 'Daumen auf den Tisch', description: 'Berühre mit deinem Daumen die Tischplatte. Der Mitspieler der zuletzt den Tisch berührt, muss einen Schluck trinken.' },
    {card: '6', title: '6 is for Chicks', subtitle: 'Frauen müssen trinken', description: 'Die Damen der Schöpfung müssen einen Schluck trinken.' },
    {card: '7', title: '7 is Heaven', subtitle: 'Zum Himmel zeigen', description: 'Zeige mit deinem Zeigefinger gen Himmel. Wer zuletzt zum Himmel zeigt, muss einen Schluck trinken.' },
    {card: '8', title: '8 is Mate', subtitle: 'Jemanden bestimmen der mittrinkt', description: 'Bestimme einen Mitspieler, der von nun an jedes Mal mit dir einen Schluck trinken muss, wenn du dazu aufgefordert wirst.' },
    {card: '9', title: '9 is Rhyme', subtitle: 'Reime oder trinke', description: 'Such dir ein Wort aus. Im Uhrzeigersinn müssen die Mitspieler einen Reim darauf finden. Wer ein Wort wiederholt oder keinen neuen Reim mehr nennen kann, muss einen Schluck trinken.' },
    {card: '10', title: '10 is Men', subtitle: 'Männer müssen trinken', description: 'Die Männer dürfen anstoßen und einen Schluck trinken.' },
    {card: '11', title: 'Bube', subtitle: 'Neue Regel ausdenken', description: 'Du darfst dir eine neue Spielregel ausdenken, die bis zum Ende des Spiels gilt. Die Regel darf keine anderen außer Kraft setzen.' },
    {card: '12', title: 'Dame', subtitle: 'Ich habe noch nie...', description: 'Du darfst eine Runde "Ich habe noch nie..." ausrufen. Die Verlierer trinken.' },
    {card: '13', title: 'Kingscup', subtitle: 'Getränk in den Kingscup gießen', description: 'Wird ein König gezogen, darf der Spieler ein Getränk seiner Wahl in den Kingscup gießen. Wird der vierte König gezogen, so muss der Spieler unverzüglich den Kingscup in der Mitte des Spiels leeren.' }
  ];

  title:string = ``;
  subtitle:string = '';
  description:string = '';

  @Input() card:any;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges():void {
    console.log('CurrentCard: ' + this.card)
    console.log('Current number ', +this.card.split('_')[1])
    if (this.card) {
      const cardNumber:number = +this.card.split('_')[1];
      setTimeout(()=>{ this.setInfosForCard(cardNumber) },1500 )
    }
  }

  setInfosForCard(cardNumber:number) {
    this.title = this.cardAction[cardNumber-1].title;
    this.subtitle = this.cardAction[cardNumber-1].subtitle;
    this.description = this.cardAction[cardNumber-1].description;
    return true
  }

}

