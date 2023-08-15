import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SeshService} from "../../service/seshservice/sesh.service";
import {SeshServiceSeshInfo} from "../../service/seshservice/model/SeshServiceSeshInfo";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {

  sessionCodeLength = 4
  playerNameMaxLength = 20

  private sessionCodeValidators = [Validators.required, Validators.pattern("[A-Z a-z]{" + this.sessionCodeLength + "}")]
  private playerNameValidators = [Validators.required, Validators.minLength(1), Validators.maxLength(this.playerNameMaxLength)]

  form = new FormGroup({
    sessionCode: new FormControl("", this.sessionCodeValidators),
    playerName: new FormControl("", this.playerNameValidators)
  })
  private seshInfo?: SeshServiceSeshInfo;
  seshExists = true;


  constructor(private seshService: SeshService, private router: Router) {
  }

  join() {

    if (this.seshInfo == undefined) return
    const playerName = this.form.value.playerName?.valueOf()
    this.router.navigateByUrl("/"+ this.seshInfo.seshType.toLowerCase() + "/" + this.seshInfo.seshCode + "/player/" + playerName).catch(error=> this.handleJoinError(error))
  }

  sessionCodeToUppercase(changeEvent: Event) {

    const target = <HTMLInputElement>changeEvent.target
    const form = this.form
    const sessionCode = target.value.toUpperCase()
    form.patchValue({sessionCode: sessionCode})
    if (form.controls.sessionCode.valid) this.checkSessionExists(sessionCode)
    else this.seshExists = true;
  }

  private checkSessionExists(sessionCode: string) {

    const observer = {
      next: (sesh: SeshServiceSeshInfo) => this.seshInfo = sesh,
      error: ((error:Error) => this.handleCheckError(error))
    }
    this.seshService.getSesh(sessionCode).subscribe(observer)
  }

  private handleCheckError(error: Error) {

    console.log(error)
    this.seshExists = false;
  }

  private handleJoinError(error: any) {

    console.log(error)
    this.seshExists = false
  }
}
