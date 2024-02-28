import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { DetalleVenta } from '../interfaces/detaventa';

@Injectable({
  providedIn: 'root'
})
export class DetaventaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/detaventas/';
  }

  getListDetaventas(): Observable<DetalleVenta[]> {
    return this.http.get<DetalleVenta[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteDetaventa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveDetaventa(detaventa: DetalleVenta): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, detaventa);
  }

  getDetaventa(id: number): Observable<DetalleVenta> {
    return this.http.get<DetalleVenta>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateDetaventa(id: number, detaventa: DetalleVenta): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, detaventa);
  }
}
