import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { VonConfirmationDialogComponent } from './dialog/von-confirmation-dialog.component';
import { VonConfirmationDialogService } from './dialog/von-confirmation-dialog.service';

@NgModule({
  declarations: [
    VonConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    ProgressSpinnerModule
  ],
  exports: [
    VonConfirmationDialogComponent
  ],
  providers: [
    DialogService,
    VonConfirmationDialogService
  ],
  entryComponents: [
    VonConfirmationDialogComponent
  ]
})
export class VonConfirmationModule { }
