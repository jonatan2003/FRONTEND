import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { Empleados } from '../interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
    private myAppUrl: string;
    private apiUrl: string;
  
    constructor(private http: HttpClient) { 
      this.myAppUrl = environment.endpoint;
      this.apiUrl = 'api/empleados/'
    }

  getEmpleados(): Observable<Empleados[]> {
    return this.http.get<Empleados[]>(this.apiUrl);
  }

  getEmpleado(id: number): Observable<Empleados> {
    return this.http.get<Empleados>(`${this.apiUrl}/${id}`);
  }

  crearEmpleado(empleados: Empleados): Observable<Empleados> {
    return this.http.post<Empleados>(this.apiUrl, empleados);
  }

  actualizarEmpleado(id: number, empleados: Empleados): Observable<Empleados> {
    return this.http.put<Empleados>(`${this.apiUrl}/${id}`, empleados);
  }

  eliminarEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
