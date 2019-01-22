import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from './models';


@Component({
  selector: 'lib-unisys-angular-tab-router',
  templateUrl: './unisys-angular-tab-router.component.html',
  styleUrls: ['./unisys-angular-tab-router.component.css']
})
export class UnisysAngularTabRouterComponent implements OnInit {
  @Input('menuList') menuList: MenuItem;
  @Input('vertical') vertical: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
