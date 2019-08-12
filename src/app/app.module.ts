import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent} from './components/services/services.component';
import { UsersComponent} from './components/users/users.component';
import { ClientsComponent} from './components/clients/clients.component';
import { RolesComponent} from './components/roles/roles.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './components/index/index.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouteModule } from './route/route.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ServicesComponent,
    ClientsComponent,
    UsersComponent,
    RolesComponent,
    MenuComponent,
    IndexComponent,
    NosotrosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
