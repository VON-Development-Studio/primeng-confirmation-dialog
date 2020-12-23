import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { Messages } from '../config/von-confirmation-config.constants';
import { VonConfirmationLocalized } from '../config/von-confirmation-localized.model';

@Component({
  selector: 'von-confirmation-dialog',
  templateUrl: './von-confirmation-dialog.component.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ]
})
export class VonConfirmationDialogComponent<T> implements OnInit {

  messages: VonConfirmationLocalized = Messages.en;
  handleSave: Observable<T> = new Observable();

  result: T | null = null;
  loading = false;
  icon: string = '';
  saving = false;
  valid: boolean | null = null;
  finished = false;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.messages = this.config.data.messages;
    this.handleSave = this.config.data.save;
  }

  save = () => {
    this.loading = true;
    this.saving = true;
    this.config.closable = false;
    this.handleSave.subscribe(
      result => {
        this.valid = true;
        this.icon = 'far fa-check-circle';
        this.result = result;
        this.setFinalTap();
      },
      () => {
        this.valid = false;
        this.icon = 'far fa-times-circle';
        this.result = null;
        this.setFinalTap();
      });
  }

  close = () => {
    this.ref.close(this.result);
  }

  setFinalTap = () => {
    this.loading = false;
    this.finished = true;
    this.config.closable = true;
  }

}
