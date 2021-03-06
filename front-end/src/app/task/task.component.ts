import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../services/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task:Task = new Task();
   tasks: Task[] = new Array();

  constructor(private taskService:TaskService){};
 
  ngOnInit(){
    return this.findAll(); 
  }

  findAll():void{
    this.taskService.findAll().subscribe(res => {
      console.log(res);
      this.tasks = res;
    })
  }

     create():void {
         this.taskService
             .create(this.task)
             .subscribe(response => {
              return this.findAll(); 
             })
     }
}
