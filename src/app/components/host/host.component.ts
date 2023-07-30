import {Component, OnInit} from '@angular/core';
import {SeshMetadataServiceService} from "../../service/sesh-metadata-service.service";
import {Router} from "@angular/router";
import {Sesh} from "../../model/Sesh";
import {environment} from "../../../environments/environment"
import {SeshType} from "../../model/SeshType";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  seshTypes: string[] = []
  supportedSeshTypes: string[] = environment.supportedSeshTypes

  constructor(private metadataService: SeshMetadataServiceService, private router: Router) {
  }

  ngOnInit(): void {

    this.metadataService.getSeshTypes().subscribe((backendSeshTypes: SeshType[]) => {

      const seshTypeStrings: string[] = backendSeshTypes.map(backendSeshType => backendSeshType.name)
      this.seshTypes = seshTypeStrings.filter((backendSeshType) => this.supportedSeshTypes.includes(backendSeshType));
    })
  }

  hostGame(seshType: string) {

    this.metadataService.hostGame(seshType).subscribe((sesh: Sesh) => {

      this.router.navigateByUrl("/" + sesh.seshType.toLowerCase() + "/" + sesh.seshCode + "/player/host").catch(error=> this.handleHostError(error))
    })
  }

  handleHostError(error: any) {

    console.log(error)
  }
}
