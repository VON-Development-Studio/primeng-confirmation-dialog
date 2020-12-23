import { Observable } from 'rxjs';

export interface VonConfirmationConfig<T> {
  save: Observable<T>;
  custom?: {
    title?: string;
    message?: string;
    success?: string;
    failure?: string;
    save?: string;
    cancel?: string;
    close?: string;
  };
  localization?: string;
}
