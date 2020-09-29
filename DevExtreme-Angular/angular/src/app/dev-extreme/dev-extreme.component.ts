import { Component } from '@angular/core';
import { DevExtremeService } from './dev-extreme.service';

@Component({
  selector: 'app-dev-extreme',
  templateUrl: './dev-extreme.component.html',
  styleUrls: ['./dev-extreme.component.scss'],
})
export class DevExtremeComponent {
  constructor(public service: DevExtremeService) {}
}
