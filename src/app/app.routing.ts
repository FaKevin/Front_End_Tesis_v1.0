import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BalanceComponent } from './balance/balance.component';
import { BalanceAdmComponent } from './balanceAdm/balanceAdm.component';
import { HistorialComponent } from './historial/historial.component';
import { RutasComponent } from './rutas/rutas.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes =[
    { path: 'inicio',         component: InicioComponent },
    { path: 'perfil',           component: PerfilComponent },
    { path: 'balance',          component: BalanceComponent },
    { path: 'balanceAdm',        component: BalanceAdmComponent },
    { path: 'historial',     component: HistorialComponent },
    { path: 'rutas',           component: RutasComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'logout',        component: LogoutComponent },
    { path: '',          redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }
