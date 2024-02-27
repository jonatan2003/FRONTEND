import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';


import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { FullCalendarModule } from '@fullcalendar/angular';
import { RegisterComponent } from './components/register/register.component';
import { Register2Component } from './components/register2/register2.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuard } from './services/auth.guard';


import { ToastrModule } from 'ngx-toastr';
import { AgregarPrestamoComponent } from './components/prestamos/agregar-prestamo/agregar-prestamo.component';
import { AgregarProductoComponent } from './components/productos/agregar-producto/agregar-producto.component';
import { ListarPrestamosComponent } from './components/prestamos/listar-prestamos/listar-prestamos.component';
import { ListarProductosComponent } from './components/productos/listar-productos/listar-productos.component';
import { PrestamosHomeComponent } from './components/prestamos-home/prestamos-home.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { ListarClientesComponent } from './components/clientes/listar-clientes/listar-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  
    HomeComponent,
  
    RegisterComponent,
    Register2Component,
    CabeceraComponent,
    MenuComponent,
    AgregarPrestamoComponent,
    AgregarProductoComponent,
    ListarPrestamosComponent,
    ListarProductosComponent,
    PrestamosHomeComponent,
    AgregarClienteComponent,
    ListarClientesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FullCalendarModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
