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
import { BalanceAdmComponent } from './balanceAdm/balanceAdm.component';
import { HistorialComponent } from './historial/historial.component';
import { RutasComponent } from './rutas/rutas.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LogoutComponent } from './logout/logout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserService } from './services/user.service';
import { TicketService } from './services/ticket.service';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import { AgmCoreModule } from '@agm/core';
import { HistorialViewComponent } from './historial-view/historial-view.component';///google maps 
import { GpsService} from './services/gps.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PerfilComponent,
    BalanceComponent,
    BalanceAdmComponent,
    HistorialComponent,
    RutasComponent,
    NotificationsComponent,
    LogoutComponent,
    SidebarComponent,
    NavbarComponent,
    UsersComponent,
    UsersComponent,
    UserViewComponent,
    UserEditComponent,
    HistorialViewComponent
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
    Ng2SmartTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsmByz8cVof9beZ85HOTNUh-_H9qwJ36Q'
    })
  ],
  providers: [UserService,TicketService,GpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
