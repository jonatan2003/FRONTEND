import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { Register2Component } from './components/register2/register2.component';
import { AuthGuard } from './services/auth.guard';
import { ListarProductosComponent } from './components/productos/listar-productos/listar-productos.component';
import { AgregarProductoComponent } from './components/productos/agregar-producto/agregar-producto.component';
import { ListarPrestamosComponent } from './components/prestamos/listar-prestamos/listar-prestamos.component';
import { AgregarPrestamoComponent } from './components/prestamos/agregar-prestamo/agregar-prestamo.component';
import { PrestamosHomeComponent } from './components/prestamos-home/prestamos-home.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },


  // { path: 'nav', component: NavbarComponent,},
  { path: 'login', component: LoginComponent },


  { path: 'register', component: RegisterComponent},
  { path: 'register/final', component: Register2Component},
  { path: 'home-prestamos', component: PrestamosHomeComponent, canActivate: [AuthGuard] },

  { path: 'productos', component: ListarProductosComponent, canActivate: [AuthGuard] },
  { path: 'productos/add', component: AgregarProductoComponent, canActivate: [AuthGuard] },
  { path: 'prestamos', component: ListarPrestamosComponent, canActivate: [AuthGuard] },
  { path: 'prestamos/add', component: AgregarPrestamoComponent, canActivate: [AuthGuard] },
  { path: 'clientes/add', component: AgregarClienteComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ListarClientesComponent, canActivate: [AuthGuard] },



]

; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
