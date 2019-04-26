import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../services/client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client:Client = new Client();

 constructor(private clientService:ClientService){};

 ngOnInit(){ }

    create():void {
      console.log("Dados enviados");
        this.clientService
            .create(this.client)
            .subscribe(response => {
            
            })
    }

   

    

  



}
