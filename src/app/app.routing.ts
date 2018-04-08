import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { UsersComponent } from './users/users.component';
import { PerfilComponent } from './perfil/perfil.component'
import { BalanceComponent } from './balance/balance.component';
import { BalanceAdmComponent } from './balanceAdm/balanceAdm.component';
import { HistorialComponent } from './historial/historial.component';
import { RutasComponent } from './rutas/rutas.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LogoutComponent } from './logout/logout.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HistorialViewComponent } from './historial-view/historial-view.component';

const routes: Routes =[
    { path: 'inicio',               component: InicioComponent },
    { path: 'users',                component: UsersComponent },
    { path: 'perfil',               component: PerfilComponent },
    { path: 'balance',              component: BalanceComponent },
    { path: 'balanceAdm',           component: BalanceAdmComponent },
    { path: 'historial',            component: HistorialComponent },
    { path: 'historial/:username',       component: HistorialViewComponent},
    { path: 'rutas',                component: RutasComponent },
    { path: 'notifications',        component: NotificationsComponent },
    { path: 'logout',               component: LogoutComponent },
    { path: '',                     redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'users/:username/view', component: UserViewComponent},
    { path: 'users/:username/edit', component: UserEditComponent}
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
