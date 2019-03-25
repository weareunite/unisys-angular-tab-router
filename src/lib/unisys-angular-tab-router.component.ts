import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from './models';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'lib-unisys-angular-tab-router',
  templateUrl: './unisys-angular-tab-router.component.html',
  styleUrls: ['./unisys-angular-tab-router.component.css']
})
export class UnisysAngularTabRouterComponent implements OnInit {
  @Input('menuList') menuList: MenuItem;
  @Input('routerLinkActiveOptions') routerLinkActiveOptions;
  @Input('vertical') vertical: boolean = false;

  constructor(
    private readonly translate: TranslateService
  ) {
    translate.setDefaultLang('sk');
    translate.use('sk');
  }

  ngOnInit() {
  }

}
