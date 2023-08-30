import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogService} from '../../services/dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

    title: string;
    message: string;
    showCancelButton: boolean;

    constructor(
        private dialogService: DialogService
    ) {
    }

    ngOnInit() {
        this.dialogService.dialogData.subscribe({
            next: (data: { title: string, message: string, showCancelButton: boolean }) => {
                this.title = data.title;
                this.message = data.message;
                this.showCancelButton = data.showCancelButton;
                document.getElementById('buttonDialog').click();
            },
            error: (err) => {
                console.error(err);
            }
        });
    }

    onConfirm() {
        this.dialogService.close(true);
    }

    onCancel() {
        this.dialogService.close(false);
    }
}
