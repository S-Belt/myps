import { Component } from '@angular/core';

import { ClientService } from './client.service';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ClientService ]
})
export class AppComponent implements OnInit{
  title = 'myps';
  clients: any

  constructor(private clientService: ClientService){
  }
 
  ngOnInit(){
    console.log('On init ....')
    this.clientService.getClients().subscribe((datas) => {
      this.clients = datas;
    })
  }
}
