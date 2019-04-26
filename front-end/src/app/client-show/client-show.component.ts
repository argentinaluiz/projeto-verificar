import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { ClientService } from '../services/client.service';
import { Client } from '../services/client';


@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.component.html',
  styleUrls: ['./client-show.component.scss']
})
export class ClientShowComponent implements OnInit {
            filter = "";        
            clients: Client[] = [];   //new Array()
          
 constructor(private clientService:ClientService){};


 findAll():void{
   this.clientService.findAll().subscribe(res => {
     console.log(res);
     this.clients = res;
   })
 } 


 ngOnInit(){
 return this.findAll();
}

    displayedColumns: string[] = ['id', 'name', 'date_birth', 'prof_empr', 'address', 'number' , 'neighborhood', 'city', 'state', 'cpf_cnpj', 'obs'  ];
  dataSource = new MatTableDataSource(this.clients);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   

}