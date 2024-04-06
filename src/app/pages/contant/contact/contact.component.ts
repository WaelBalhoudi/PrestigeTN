import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactContant=[
    {srcImg:"./../../../../assets/icons/facebook.png",title:"FaceBook"},
    {srcImg:"./../../../../assets/icons/new.png",title:"Gmail"},
    {srcImg:"./../../../../assets/icons/telephone.png",title:"Telphone"}


  ]
}
