import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, 
  group 
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:[     
    trigger('menuMovie', [
      transition('void => *', [        
         style({ opacity: 0.2, transform: 'translateY(-100%)' }),
         animate('1500ms ease-in')
      ]),
      transition('in => out', animate('600ms ease-out')),
      transition('out => in', animate('1000ms ease-in'))
    ])


  ] ////
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
