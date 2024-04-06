import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { car } from 'src/app/car';
import { CarServiceService } from 'src/app/car-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  hearo={
    title:"Buy car whith ",
    contant:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ad. Porro, fuga natus neque, ea perspiciatis odio mollitia assumenda voluptas voluptatem molestias quibusdam, ex sed eum laborum quidem fugit. Atque.",
    getStartedLink:"/Cars List",
    LearnMoreLink:"",
    srcImg:"./../../../../assets/hearo.jpg"
  }
  constructor(public carService:CarServiceService,private router:Router){
  };
  imgSrc="";
  car={
    id :this.carService.carList[this.carService.carList.length-1].id+1,
    name :'',
    price :0,
    prductionDate :'',
    fule :'',
    mileage :0,
    image1 :'',
    image2 :'',
    image3 :'',
    rentedNow:true,
    power:0,
    gearbox:'',
    bodyType :'',
    type:'',
    drivetrain:'',
    seats:0,
    doors:0
}
  addCars(){
    this.car.image1="./../../../../assets/car images/"+this.imgSrc.slice(this.imgSrc.indexOf("th")+3,this.imgSrc.length);
    this.car.image2=this.car.image1
    this.car.image3=this.car.image1
    this.carService.carList.push(this.car);
    this.router.navigateByUrl("/Cars List")
    
  }

}
