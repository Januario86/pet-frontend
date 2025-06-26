import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { AuthGuard } from './guards/auth-guard';
import { ClienteComponent } from './components/clientes/cliente-component/cliente-component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'home',
    component: Home, canActivate: [AuthGuard],
    children: [
      { path: 'cliente', component: ClienteComponent },     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
