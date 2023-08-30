import {Component} from '@angular/core';
import {ProfileModel} from '../../../models/profile.model';
import {CONTACT, PROFILE} from '../../../mocks/global-info';
import {ContactModel} from '../../../models/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  public profile: ProfileModel = PROFILE;
  public contact: ContactModel = CONTACT;
  year = new Date().getFullYear();

}
