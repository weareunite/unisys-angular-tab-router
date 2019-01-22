import { NgModule } from '@angular/core';
import { UnisysAngularTabRouterComponent } from './unisys-angular-tab-router.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  declarations: [UnisysAngularTabRouterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPermissionsModule
  ],
  exports: [UnisysAngularTabRouterComponent]
})
export class UnisysAngularTabRouterModule { }
