import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Roles } from '../../interfaces/oldinterfaces/roles'; // Asegúrate de tener la interfaz "Roles" definida correctamente

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/roles/'
  }

  getListRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteRol(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveRol(rol: Roles): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, rol)
  }

  getRol(id: number): Observable<Roles> {
    return this.http.get<Roles>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateRol(id: number, rol: Roles): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, rol);
  }
}
