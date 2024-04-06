import { Component, Input } from '@angular/core';
import { hearo } from 'src/app/hearo';

@Component({
  selector: 'app-hearo',
  templateUrl: './hearo.component.html',
  styleUrls: ['./hearo.component.css']
})
export class HearoComponent {
  @Input() hearo!:hearo;
}
