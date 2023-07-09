import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {QuizxelMainState} from "../../model/QuizxelMainState";
import {QuizxelPlayer} from "../../model/QuizxelPlayer";

@Component({
  selector: 'app-quizxel-host-main',
  templateUrl: './quizxel-host-main.component.html',
  styleUrls: ['./quizxel-host-main.component.css']
})
export class QuizxelHostMainComponent implements OnChanges{

  @Input() state = <QuizxelMainState>{}
  buzzeredPlayer?: QuizxelPlayer

  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.state)
    this.state.players.forEach(player => {
      console.log(player)
      console.log(this.state.buzzedPlayerId)
      console.log(player.playerId === this.state.buzzedPlayerId)
      if (player.playerId === this.state.buzzedPlayerId) {

        this.buzzeredPlayer = player
        console.log(player)
      }
    })
  }
}
