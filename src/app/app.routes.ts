import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ActoresComponent } from './pages/datatable/tables/actores/actores.component';
import { AddactorComponent } from './pages/datatable/tables/actores/addactor/addactor.component';

export const routes: Routes = [
    { path: 'home', component:HomeComponent },
    { path: 'login', component:LoginComponent },
    { path: 'registro', component:RegistroComponent },
    { path: 'tbactores', component:ActoresComponent },
    { path: 'addactor', component:AddactorComponent },
    { path: '**', redirectTo: 'login' }

];
