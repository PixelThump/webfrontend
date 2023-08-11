import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment"
import {SeshService} from "../../service/seshservice/sesh.service";
import {SeshServiceSeshInfo} from "../../service/seshservice/model/SeshServiceSeshInfo";
import {SeshServiceSeshType} from "../../service/seshservice/model/SeshServiceSeshType";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  backendSupportedSeshTypes: string[] = []
  frontendSupportedSeshTypes: string[] = environment.supportedSeshTypes

  constructor(private seshService: SeshService, private router: Router) {
  }

  ngOnInit(): void {

    this.seshService.getSeshTypes().subscribe((seshServiceSeshTypes: SeshServiceSeshType[]) => {

      const seshTypeStrings: string[] = seshServiceSeshTypes.map(backendSeshType => backendSeshType.name)
      this.backendSupportedSeshTypes = seshTypeStrings.filter((backendSeshType) => this.frontendSupportedSeshTypes.includes(backendSeshType));
    })
  }

  hostGame(seshType: string) {

    this.seshService.hostGame(seshType).subscribe((sesh: SeshServiceSeshInfo) => {

      this.router.navigateByUrl("/" + sesh.seshType.toLowerCase() + "/" + sesh.seshCode + "/player/host").catch(error=> this.handleHostError(error))
    })
  }

  handleHostError(error: any) {

    console.log(error)
  }
}
