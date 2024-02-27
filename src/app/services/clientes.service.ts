import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { Clientes } from '../interfaces/clientes'; // Cambiar a "Clientes" si esa es la interfaz correcta

@Injectable({
  providedIn: 'root'
})
export class ClientesService { 
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/clientes/'
  }

  getListClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveCliente(clientes: Clientes): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, clientes)
  }

  getCliente(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateCliente(id: number, clientes: Clientes): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, clientes);
  }
}
