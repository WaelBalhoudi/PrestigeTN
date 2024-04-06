import { Component } from '@angular/core';
import { CarServiceService } from 'src/app/car-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public carService:CarServiceService){
  };
}
