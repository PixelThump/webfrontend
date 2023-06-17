import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sesh} from "../Model/Sesh";


@Injectable({
  providedIn: 'root'
})
export class SeshMetadataServiceService {

  private backendUrl = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  getSeshTypes(): Observable<string[]> {

    return this.http.get<string[]>(this.backendUrl + "/seshtypes")
  }

  hostGame(seshType: string): Observable<Sesh> {

    const options = {
      headers: {'Content-Type': 'application/json'}
    }

    return this.http.post<Sesh>(this.backendUrl + "/seshs", seshType, options)
  }

  getSesh(sessionCode: string): Observable<Sesh> {

    return this.http.get<Sesh>(this.backendUrl + "/sessions/" + sessionCode)
  }
}
