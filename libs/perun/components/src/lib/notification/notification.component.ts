import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NotificationData} from '@perun-web-apps/perun/models';
import { MatDialog } from '@angular/material/dialog';

import { NotificationStorageService } from '@perun-web-apps/perun/services';
import { doAfterDelay, getDefaultDialogConfig } from '@perun-web-apps/perun/utils';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'perun-web-apps-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{

  constructor(
    private dialog: MatDialog,
    private notificationStorageService: NotificationStorageService
  ) { }

  @Input()
  data: NotificationData;

  @Input()
  inDialog: boolean;

  @Input()
  newNotification = false;

  @Output()
  closeNotification: EventEmitter<NotificationData> = new EventEmitter<NotificationData>();

  alreadyPressed = false;
  alreadyClosed = false;
  waiting = false;

  doAction(): void {
    if(this.newNotification){
      this.alreadyPressed = true;
    }
    if(this.notificationStorageService.newNotificationsCount){
      this.notificationStorageService.newNotificationsCount--;
    }
    if (this.data.action !== undefined) {
      this.data.action();
    } else {
      const config = getDefaultDialogConfig();
      config.width = '550px';
      config.data = this.data;
      config.autoFocus = false;

      const dialogRef = this.dialog.open(NotificationDialogComponent, config);

      dialogRef.afterClosed().subscribe(() =>{
        this.closeSelf();
      });
    }
  }

  closeSelf(){
    if(!this.inDialog){
      if(this.newNotification){
        this.alreadyClosed = true;
      }
      if(this.notificationStorageService.newNotificationsCount){
        this.notificationStorageService.newNotificationsCount--;
      }
      this.closeNotification.emit();
    }
  }

  ngOnInit(): void {
    doAfterDelay(this.data.delay, () => {
      if(!this.alreadyClosed && !this.waiting){
        this.closeSelf();
      }
    });
  }
}
