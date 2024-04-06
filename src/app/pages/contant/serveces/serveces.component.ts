import { Component } from '@angular/core';

@Component({
  selector: 'app-serveces',
  templateUrl: './serveces.component.html',
  styleUrls: ['./serveces.component.css']
})
export class ServecesComponent {
  cards=[
    {srcImg:"./../../../../assets/icons/front-car.png",title:"Cars",paragrphe:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint quae id tenetur beatae eveniet. Nobis ipsa sunt eveniet id."},
    {srcImg:"./../../../../assets/icons/bike.png",title:"Motobikes",paragrphe:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint quae id tenetur beatae eveniet. Nobis ipsa sunt eveniet id."},
    {srcImg:"./../../../../assets/icons/minivan.png",title:"Vans",paragrphe:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint quae id tenetur beatae eveniet. Nobis ipsa sunt eveniet id."},
  ]
}
