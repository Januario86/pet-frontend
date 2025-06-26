import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { ClienteComponent } from './components/clientes/cliente-component/cliente-component';

export const routes: Routes = [

    {
        path: "",
        component: Login,
    } ,
     {
        path: "home",
        component: Home,
        children: [
      { path: 'cliente', component: ClienteComponent }
    ]
    },
    { path: '**', redirectTo: 'login' }
];
