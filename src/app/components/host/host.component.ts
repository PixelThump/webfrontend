import {Component, OnInit} from '@angular/core';
import {SeshMetadataServiceService} from "../../service/sesh-metadata-service.service";
import {Router} from "@angular/router";
import {Sesh} from "../../model/Sesh";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  seshTypes: string[] = []

  constructor(private metadataService: SeshMetadataServiceService, private router: Router) {
  }

  ngOnInit(): void {

    this.metadataService.getSeshTypes().subscribe((seshTypes: string[]) => this.seshTypes = seshTypes)
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
