import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Messages } from '../config/von-confirmation-config.constants';
import { VonConfirmationConfig } from '../config/von-confirmation-config.model';
import { VonConfirmationLocalized } from '../config/von-confirmation-localized.model';
import { VonConfirmationDialogComponent } from './von-confirmation-dialog.component';

@Injectable()
export class VonConfirmationDialogService {

  constructor(
    protected dialogService: DialogService
  ) { }

  open = <T>(config: VonConfirmationConfig<T>): DynamicDialogRef => {
    let localizedMsg = this.localizedMessages(config.localization);
    if (config.custom) {
      localizedMsg = {
        ...localizedMsg,
        ...config.custom
      };
    }

    return this.dialogService.open(VonConfirmationDialogComponent, {
      header: localizedMsg.title,
      data: {
        messages: localizedMsg,
        save: config.save
      },
      style: {
        maxHeight: '50%'
      },
      closeOnEscape: false,
      closable: true,
      width: '35%'
    });
  }

  private localizedMessages = (localization?: string): VonConfirmationLocalized => {
    if (localization && localization.toLocaleLowerCase() === 'es') {
      return Messages.es;
    }
    return Messages.en;
  }

}
