import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logo:any = '../assets/images/logo.png';
  slogan:any = '../assets/images/slogan.png'; 
  eletric:any= '../assets/images/install-eletric.jpg';
  hidraulic:any= '../assets/images/install-hidraulic.jpg';
  metals:any= '../assets/images/install-metals.jpg';
  leaks:any= '../assets/images/leaks.jpg';
  maintenances:any= '../assets/images/maintenances.jpg';
  unstop:any= '../assets/images/unstop.jpg';

  eletricicon:any= '../assets/images/eletric-icon.png';
  hidraulicicon:any= '../assets/images/hidraulic-icon.png';
  metalsicon:any= '../assets/images/metals-icon.png';
  mainticon:any= '../assets/images/maint-icon.png';
  leaksicon:any= '../assets/images/leaks-icon.png';
  unstopicon:any= '../assets/images/unstop-icon.png';
  whats:any= '../assets/images/whatsapp.png';
  click:any= '../assets/images/click.png';

  // api.whatsapp.com/send?1=pt_BR&phone=5547997206015    ///// 9977-3206  
  whatsapp(){    
    window.open("https://api.whatsapp.com/send?1=pt_BR&phone=5547999773206", "_blank");
  }

  constructor() { }

  ngOnInit() {
  }

}
