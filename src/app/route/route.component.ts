import {NgModule} from '@angular/core';

import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';


import { ProductsComponent } from './../components/products/products.component';
import { ServicesComponent } from '../components/services/services.component';
import { UsersComponent } from '../components/users/users.component';
import { ClientsComponent } from '../components/clients/clients.component';
import { RolesComponent } from '../components/roles/roles.component';
import { NavcrudsComponent } from '../components/navcruds/navcruds.component';
import { NavpagesComponent } from '../components/navpages/navpages.component';
import { IndexComponent } from '../components/index/index.component';
import { FooterComponent } from '../components/footer/footer.component';
import { Route } from '@angular/compiler/src/core';



const routes: Routes = [
    {path:'home', component: AppComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'users', component: UsersComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'navcruds', component: NavcrudsComponent},
    {path: 'navpages', component: NavpagesComponent},
    {path: 'index', component: IndexComponent},
    {path: 'footer', component: FooterComponent},

]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports:[RouterModule],
})
export class RouteModule {}