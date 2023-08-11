import {Component, Input, OnInit} from '@angular/core';
import {QuizxelPlayer} from "../../../model/QuizxelPlayer";

@Component({
  selector: 'app-quizxel-host-lobby-player',
  templateUrl: './quizxel-host-playerImage.component.html',
  styleUrls: ['./quizxel-host-playerImage.component.css']
})
export class QuizxelHostPlayerImageComponent implements OnInit{
  @Input() player = <QuizxelPlayer>{};
  @Input() showPoints = false;
  imageName?: string;

  ngOnInit(): void {

    if (this.player.imageName == undefined){

      this.imageName = "defaultplayericon"
    }else {

      this.imageName = "quizxel/" + this.player.imageName
    }
  }

}
