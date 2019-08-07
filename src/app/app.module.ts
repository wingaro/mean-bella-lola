import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent} from './components/services/services.component';
import { UsersComponent} from './components/users/users.component';
import { ClientsComponent} from './components/clients/clients.component';
import { RouteModule } from './route/route.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ServicesComponent,
    ClientsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
