import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerDownDialogComponent } from './server-down-dialog/server-down-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDontExistDialogComponent } from './user-dont-exist-dialog/user-dont-exist-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, TranslateModule],
  exports: [ServerDownDialogComponent, UserDontExistDialogComponent],
  declarations: [ServerDownDialogComponent, UserDontExistDialogComponent]
})
export class GeneralModule {}
