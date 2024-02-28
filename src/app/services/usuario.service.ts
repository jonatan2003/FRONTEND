import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/usuarios/'
  }

  getListUsuarios(): Observable<Usuario[]> {
   return this.http.get<Usuario[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveUsuario(usuarios: Usuario): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,usuarios)
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateUsuario(id: number, usuarios: Usuario): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, usuarios);
  }
}
