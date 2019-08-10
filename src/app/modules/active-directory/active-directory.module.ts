import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveDirectoryComponent } from './active-directory.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdalService, AdalGuard, AdalInterceptor } from 'adal-angular4';

@NgModule({
  declarations: [
    ActiveDirectoryComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ AdalService, AdalGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true },
  ],
  exports: [
    ActiveDirectoryComponent
  ]
})
export class ActiveDirectoryModule { }
