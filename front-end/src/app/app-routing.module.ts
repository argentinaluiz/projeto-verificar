import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { ClientComponent } from './client/client.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { FilterPipe } from './filter.pipe';


 



const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {  
    path:'home',
    component: HomeComponent
  },
  {  
    path:'task',
    component: TaskComponent
  },
  {  
    path:'client',
    component: ClientComponent
  },
  {  
    path:'client-show',
    component: ClientShowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule,BrowserAnimationsModule, FormsModule],
  exports: [RouterModule,NavbarComponent],
    providers:[TaskService],
    bootstrap:[AppComponent],
    declarations: [NavbarComponent, HomeComponent, TaskComponent, ClientComponent, ClientShowComponent, FilterPipe],
   
})
export class AppRoutingModule { }
