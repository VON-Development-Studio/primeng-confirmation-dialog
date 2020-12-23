# PrimeNG Confirmation Dialog

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Installing

1. Add NPM package into your project:

  ```node
  npm i @von-development-studio/primeng-confirmation-dialog -S
  ```

2. Add _**VonConfirmationModule**_ into `imports` section

  ```typescript
  import { VonConfirmationModule } from '@von-development-studio/primeng-confirmation-dialog';

  ...

  @NgModule({
    imports: [
      ...
      VonConfirmationModule,
      ...
    ]
  })
  export class AppModule { }
  ```

## Usage

1. Add service in constructor:

  ```typescript
  import { VonConfirmationDialogService } from '@von-development-studio/primeng-confirmation-dialog';
  
  constructor(
    ...
    protected confirmationDialog: VonConfirmationDialogService,
    ...
  ) { }
  ```

2. Call service, `open` method, with configuration parameter:

  ```typescript
  this.confirmationDialog.open<any>({
    save: of({})
  });
  ```

<hr>

###### _[By Von Development Studio](https://www.von-development-studio.com/)_
