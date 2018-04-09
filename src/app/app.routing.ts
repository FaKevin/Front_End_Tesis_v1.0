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
import { LogoutComponent } from './logout/logout.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HistorialViewComponent } from './historial-view/historial-view.component';

const routes: Routes =[
    { path: 'inicio',               component: InicioComponent },
    { path: 'users',                component: UsersComponent },//auth admin
    { path: 'users/:username/edit', component: UserEditComponent},//auth admin
    { path: 'users/:username/view', component: UserViewComponent},//auth admin
    //{ path: 'users/:username/historial', component: HistorialViewComponent},crear....
    { path: 'perfil',               component: PerfilComponent },//auth
    { path: 'balance',              component: BalanceComponent },//auth
    { path: 'balanceAdm',           component: BalanceAdmComponent },//auth admin
    { path: 'historial',            component: HistorialComponent },//auth
    { path: 'historial/view',            component: HistorialViewComponent },//auth
    { path: 'rutas',                component: RutasComponent },
    { path: 'logout',               component: LogoutComponent },
    { path: '',                     redirectTo: 'inicio', pathMatch: 'full' },

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
