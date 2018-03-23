import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
//import { NavbarModule } from './shared/navbar/navbar.module';
//import { FooterModule } from './shared/footer/footer.module';
//import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';
import { HttpClientModule } from '@angular/common/http'
import { Ng2SmartTableModule } from '../ng2-smart-table';

import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BalanceComponent } from './balance/balance.component';
import { HistorialComponent } from './historial/historial.component';
import { RutasComponent } from './rutas/rutas.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LogoutComponent } from './logout/logout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { UserService } from './services/user.service';
import { TicketService } from './services/ticket.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PerfilComponent,
    BalanceComponent,
    HistorialComponent,
    RutasComponent,
    NotificationsComponent,
    LogoutComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //NavbarModule,
    //FooterModule,
    //SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  providers: [UserService,TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
