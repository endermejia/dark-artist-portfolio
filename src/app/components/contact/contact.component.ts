import {Component} from '@angular/core';
import {ProfileModel} from '../../models/profile.model';
import {CONTACT_INFO, PROFILE} from '../../mocks/global-info';
import {ContactInfoModel} from '../../models/contact-info.model';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    public profile: ProfileModel = PROFILE;
    public contactInfo: ContactInfoModel = CONTACT_INFO;
    public contactForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient
    ) {
        this.contactForm = this.formBuilder.group({
            name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
            message: new FormControl(null, [Validators.required, Validators.minLength(10)])
        });
    }

    public sendMessage() {
        if (this.contactForm.valid) {
            this.http.post(this.contactInfo.formspree, this.contactForm.value).subscribe({
                next: (data) => {
                    console.log(data);
                },
                error: (err) => {
                    console.error(err);
                }
            });
        }
    }
}
