import { Component } from '@angular/core';
import { hearo } from 'src/app/hearo';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  hearo={
    title:"Welcome To ",
    contant:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ad. Porro, fuga natus neque, ea perspiciatis odio mollitia assumenda voluptas voluptatem molestias quibusdam, ex sed eum laborum quidem fugit. Atque.",
    getStartedLink:"/Cars List",
    LearnMoreLink:"",
    srcImg:"./../../../../assets/hearo.jpg"
  }


}
