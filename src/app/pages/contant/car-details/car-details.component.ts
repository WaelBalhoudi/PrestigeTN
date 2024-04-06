import { Component } from '@angular/core';
import { CarServiceService } from 'src/app/car-service.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  constructor(public carService:CarServiceService){
  }
  id=this.carService.indexOfCar;

}
