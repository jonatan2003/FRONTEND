import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/empleados/';
  }

  getListEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveEmpleado(empleado: Empleado): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, empleado);
  }

  getEmpleado(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateEmpleado(id: number, empleado: Empleado): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, empleado);
  }
}
