import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GroupsManagerService, RichGroup } from '@perun-web-apps/perun/openapi';
import { Urns } from '@perun-web-apps/perun/urns';
import { getAttribute } from '@perun-web-apps/perun/utils';
import { NotificatorService } from '@perun-web-apps/perun/services';

export type SyncType  = 'BASIC' | 'STRUCTURED';

@Component({
  selector: 'app-group-sync-detail-dialog',
  templateUrl: './group-sync-detail-dialog.component.html',
  styleUrls: ['./group-sync-detail-dialog.component.scss']
})
export class GroupSyncDetailDialogComponent implements OnInit {
  private syncEnabled: string;
  private lastSyncState: string;
  private lastSyncTime: string;
  private structSyncEnabled: boolean;
  private lastStructSyncState: string;
  private lastStructSyncTime: string;

  constructor(
    public dialogRef: MatDialogRef<GroupSyncDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public group: RichGroup,
    private groupService: GroupsManagerService,
    private notificator: NotificatorService
  ) { }

  private type: SyncType;
  loading = false;

  ngOnInit(): void {
    this.syncEnabled = <string><unknown>getAttribute(this.group.attributes, Urns.GROUP_SYNC_ENABLED).value;
    this.lastSyncState = <string><unknown>getAttribute(this.group.attributes, Urns.GROUP_LAST_SYNC_STATE).value;
    this.lastSyncTime = <string><unknown>getAttribute(this.group.attributes, Urns.GROUP_LAST_SYNC_TIMESTAMP).value;
    this.structSyncEnabled = <boolean><unknown>getAttribute(this.group.attributes, Urns.GROUP_STRUCTURE_SYNC_ENABLED).value;
    this.lastStructSyncState = <string><unknown>getAttribute(this.group.attributes, Urns.GROUP_LAST_STRUCTURE_SYNC_STATE).value;
    this.lastStructSyncTime = <string><unknown>getAttribute(this.group.attributes, Urns.GROUP_LAST_STRUCTURE_SYNC_TIMESTAMP).value;

    if (this.syncEnabled !== null && this.syncEnabled === 'true') {
      this.type = 'BASIC';
    }
    if (this.structSyncEnabled !== null && this.structSyncEnabled) {
      this.type = 'STRUCTURED';
    }
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  onForce() {
    this.loading = true;
    if (this.isBasic()) {
      this.groupService.forceGroupSynchronization(this.group.id).subscribe(() => {
        this.notificator.showSuccess('DIALOGS.GROUP_SYNC_DETAIL.FORCE_SUCCESS');
        this.dialogRef.close();
      }, () => this.loading = false);
    }
    if (this.isStructured()) {
      this.groupService.forceGroupStructureSynchronization(this.group.id).subscribe(() => {
        this.notificator.showSuccess('DIALOGS.GROUP_SYNC_DETAIL.FORCE_SUCCESS');
        this.dialogRef.close();
      }, () => this.loading = false);
    }
  }

  getSynchronizationType() : string {
    if (this.isBasic()) {
      return 'DIALOGS.GROUP_SYNC_DETAIL.NORMAL_SYNC';
    }
    if (this.isStructured()) {
      return 'DIALOGS.GROUP_SYNC_DETAIL.STRUCT_SYNC';
    }
    return "N/A";
  }

  isBasic() {
    return this.type === 'BASIC';
  }

  isStructured() {
    return this.type === 'STRUCTURED';
  }

  getLastSyncState() {
    if (this.isBasic()) {
      return this.lastSyncState !== '' ? this.lastSyncState : 'OK';
    }
    if (this.isStructured()) {
      return this.lastStructSyncState !== '' ? this.lastStructSyncState : 'OK';
    }
    return 'N/A';
  }

  getLastSyncTime() {
    if (this.isBasic()) {
      return this.lastSyncTime;
    }
    if (this.isStructured()) {
      return this.lastStructSyncTime;
    }
    return 'N/A';
  }
}
