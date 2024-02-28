import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { Venta } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/ventas/';
  }

  getListVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteVenta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveVenta(venta: Venta): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, venta);
  }

  getVenta(id: number): Observable<Venta> {
    return this.http.get<Venta>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateVenta(id: number, venta: Venta): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, venta);
  }
}
