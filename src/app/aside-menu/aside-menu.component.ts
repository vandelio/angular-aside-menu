import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent {
  @Input('name') displayName = '';
  activeMenu = false;
  constructor() { }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
