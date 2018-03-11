import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'inicio', title: 'Inicio',  icon: 'pe-7s-home', class: '' },
    { path: 'perfil', title: 'Perfil',  icon:'pe-7s-user', class: '' },
    { path: 'rutas', title: 'Rutas',  icon:'pe-7s-way', class: '' },
    { path: 'balance', title: 'Balance',  icon:'pe-7s-note2', class: '' },
    { path: 'historial', title: 'Historial',  icon:'pe-7s-map-marker', class: '' },
    { path: 'upgrade', title: 'logout',  icon:'pe-7s-power', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
