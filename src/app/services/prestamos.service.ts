import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { Prestamos } from '../interfaces/prestamos'; // Asegúrate de tener la interfaz "Prestamos" definida correctamente

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/prestamos/';
  }

  getListPrestamos(): Observable<Prestamos[]> {
    return this.http.get<Prestamos[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deletePrestamo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  savePrestamo(prestamo: Prestamos): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, prestamo);
  }

  getPrestamo(id: number): Observable<Prestamos> {
    return this.http.get<Prestamos>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updatePrestamo(id: number, prestamo: Prestamos): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, prestamo);
  }
}
