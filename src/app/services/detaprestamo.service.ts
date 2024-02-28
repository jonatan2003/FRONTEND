import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { DetallePrestamo } from '../interfaces/detaprestamo';

@Injectable({
  providedIn: 'root'
})
export class DetallePrestamoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/detalleprestamos/';
  }

  getListDetallePrestamos(): Observable<DetallePrestamo[]> {
    return this.http.get<DetallePrestamo[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteDetallePrestamo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveDetallePrestamo(detalleprestamo: DetallePrestamo): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, detalleprestamo);
  }

  getDetallePrestamo(id: number): Observable<DetallePrestamo> {
    return this.http.get<DetallePrestamo>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateDetallePrestamo(id: number, detalleprestamo: DetallePrestamo): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, detalleprestamo);
  }
}
