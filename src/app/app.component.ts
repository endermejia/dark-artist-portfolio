import {Component} from '@angular/core';
import {PROFILE} from './mocks/global-info';
import {ProfileModel} from './models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public profile: ProfileModel = PROFILE;
}
