import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {openClose, tagsOpenClose} from '@perun-web-apps/perun/animations';
import { ApplicationMail, RegistrarManagerService } from '@perun-web-apps/perun/openapi';

export interface ApplicationFormAddEditMailDialogData {
  voId: number;
  groupId: number;
  createMailNotification: boolean;
  applicationMail: ApplicationMail;
  applicationMails: ApplicationMail[];
}

@Component({
  selector: 'app-add-edit-notification-dialog',
  templateUrl: './add-edit-notification-dialog.component.html',
  styleUrls: ['./add-edit-notification-dialog.component.scss'],
  animations: [
    tagsOpenClose,
    openClose
  ]
})
export class AddEditNotificationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddEditNotificationDialogComponent>,
              private registrarService: RegistrarManagerService,
              @Inject(MAT_DIALOG_DATA) public data: ApplicationFormAddEditMailDialogData) { }

  applicationMail: ApplicationMail;
  showTags = false;
  isTextFocused = true;
  invalidNotification = false;
  language = 'en';

  ngOnInit() {
    this.applicationMail = this.data.applicationMail;
  }

  cancel() {
    this.dialogRef.close();
  }

  create() {
    this.notificationExist();
    if (this.invalidNotification) {
      return;
    }
    if (this.data.groupId) {
      this.registrarService.addApplicationMailForGroup({ group: this.data.groupId, mail: this.applicationMail }).subscribe( () => {
        this.dialogRef.close(true);
      });
    } else {
      this.registrarService.addApplicationMailForVo({ vo: this.data.voId, mail: this.applicationMail }).subscribe( () => {
        this.dialogRef.close(true);
      });
    }
  }

  save() {
    this.registrarService.updateApplicationMail({ mail: this.applicationMail }).subscribe( () => {
      this.dialogRef.close(true);
    });
  }

  addTag(input: HTMLInputElement, textarea: HTMLTextAreaElement, language: string, tag: string) {
    let place: any;
    if (!this.isTextFocused) {
      place = input;
    } else {
      place = textarea;
    }
    const position: number = place.selectionStart;
    if (this.isTextFocused) {
      this.applicationMail.message[language].text =
        this.applicationMail.message[language].text.substring(0, position) +
        tag +
        this.applicationMail.message[language].text.substring(position);
    } else {
      this.applicationMail.message[language].subject =
        this.applicationMail.message[language].subject.substring(0, position)
        + tag +
        this.applicationMail.message[language].subject.substring(position);
    }
    place.focus();
  }

  notificationExist() {
    for (const mail of this.data.applicationMails) {
      if (mail.mailType === this.applicationMail.mailType && mail.appType === this.applicationMail.appType) {
        this.invalidNotification =  true;
        return;
      }
    }
    this.invalidNotification =  false;
  }
}
