import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private headers: Headers;
  private options: RequestOptions;
constructor(private http:Http) {
  this.headers = new Headers({'Content-type': 'application/json'});
  this.options = new RequestOptions({ headers: this.headers});
 }

 // http://localhost:8080
findAll():Observable<Client[]> {
  return this.http.get('http://localhost:8080/clients')
                  .map((res:Response) =>  res.json());
}  

 create(client: Client): Observable<Client>{
    return this.http
               .post('http://localhost:8080/clients', JSON.stringify(client), this.options)
               .map((res: Response) => res.json());
 }            
}
