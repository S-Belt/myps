import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly API_URL = "http://localhost:8080"
  readonly ENDPOINT_CLIENTS ="/clients"

  constructor(private httpClient: HttpClient) { }

  getClients(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_CLIENTS)
  }
}
