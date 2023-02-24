import { IdentityUserDto } from '@abp/ng.identity/proxy';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DevExtremeService } from './dev-extreme.service';

@Component({
  selector: 'app-dev-extreme',
  templateUrl: './dev-extreme.component.html',
  styleUrls: ['./dev-extreme.component.scss'],
})
export class DevExtremeComponent {

  users$: Observable<IdentityUserDto[]>;
  constructor(private service: DevExtremeService) {
    this.users$ = this.service.getUsers();
  }
}
