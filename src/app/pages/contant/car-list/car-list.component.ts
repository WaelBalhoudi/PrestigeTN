import { Component } from '@angular/core';
import { car } from 'src/app/car';
import { CarServiceService } from 'src/app/car-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  constructor(public carService:CarServiceService){

  }
  
 
}
