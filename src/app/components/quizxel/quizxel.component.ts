import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MessagingService} from "../../service/messagingservice/messaging.service";

@Component({
  selector: 'app-quizxel',
  templateUrl: './quizxel.component.html',
  styleUrls: ['./quizxel.component.css']
})
export class QuizxelComponent implements OnInit {

  playerIsHost = true
  playerName: string = ""

  constructor(private seshService: MessagingService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

        this.playerName = <string>params.get("playerName")
        this.playerIsHost = this.playerName === "host"
      }
    )
  }
}
