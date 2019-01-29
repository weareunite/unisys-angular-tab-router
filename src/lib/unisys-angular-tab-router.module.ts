import {NgModule} from '@angular/core';
import {UnisysAngularTabRouterComponent} from './unisys-angular-tab-router.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgxPermissionsModule} from 'ngx-permissions';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
  declarations: [UnisysAngularTabRouterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPermissionsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [UnisysAngularTabRouterComponent]
})
export class UnisysAngularTabRouterModule {
}
