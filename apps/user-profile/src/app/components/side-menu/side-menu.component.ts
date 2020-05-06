import { Component, OnInit } from '@angular/core';
import { SideMenuItem, SideMenuItemService } from '../../services/side-menu-item.service';
import { StoreService } from '@perun-web-apps/perun/services';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'perun-web-apps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  private currentUrl: string;

  constructor(
    private sideMenuItemService: SideMenuItemService,
    private storeService: StoreService,
    private router: Router
  ) {
    this.currentUrl = router.url;

    router.events.subscribe((_: NavigationEnd) => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;
      }
    });
  }

  items: SideMenuItem[] = [];

  textColor = this.storeService.get('theme', 'sidemenu_text_color');
  iconColor = this.storeService.get('theme', 'sidemenu_item_icon_color');

  ngOnInit() {
    this.items.push(this.sideMenuItemService.getProfileItem());
    this.items.push(this.sideMenuItemService.getIdentitiesItem());
    this.items.push(this.sideMenuItemService.getServicesItem());
    this.items.push(this.sideMenuItemService.getGroupsItem());
    this.items.push(this.sideMenuItemService.getVosItem());
    this.items.push(this.sideMenuItemService.getPrivacyItem());
    this.items.push(this.sideMenuItemService.getSettingsItem());
  }

  isActive(regexValue: string) {
    const regexp = new RegExp(regexValue);

    return regexp.test(this.currentUrl);
  }
}