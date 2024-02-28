import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { Modelo } from '../interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/modelos/';
  }

  getListModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteModelo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveModelo(modelo: Modelo): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, modelo);
  }

  getModelo(id: number): Observable<Modelo> {
    return this.http.get<Modelo>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateModelo(id: number, modelo: Modelo): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, modelo);
  }
}
