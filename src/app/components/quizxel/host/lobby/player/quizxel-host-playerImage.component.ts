import {Component, Input, OnInit} from '@angular/core';
import {QuizxelPlayer} from "../../../model/QuizxelPlayer";
import {PlayerIconName} from "./PlayerIconNames";

@Component({
  selector: 'app-quizxel-host-lobby-playerplayerImage',
  templateUrl: './quizxel-host-playerImage.component.html',
  styleUrls: ['./quizxel-host-playerImage.component.css']
})
export class QuizxelHostPlayerImageComponent implements OnInit {
  @Input() player = <QuizxelPlayer>{};
  @Input() showPoints = false;
  imageName?: string;

  ngOnInit(): void {

    if (this.player.playerIconName == null) {

      this.player.playerIconName = PlayerIconName.default;
    }
    console.log(this.player.playerIconName)
    this.imageName = "quizxel/" + this.player.playerIconName + "PlayerIcon"
  }

}
