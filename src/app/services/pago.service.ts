import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { Pago } from '../interfaces/pago';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/pagos/';
  }

  getListPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deletePagos(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  savePagos(pagos: Pago): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, pagos);
  }

  getPagos(id: number): Observable<Pago> {
    return this.http.get<Pago>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updatePagos(id: number, pagos: Pago): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, pagos);
  }
}
