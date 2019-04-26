import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './services/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Guesser';
  
    constructor(){};
 
  ngOnInit(){}
  
}
