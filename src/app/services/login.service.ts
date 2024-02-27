import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'URL_DE_TU_API_DE_AUTENTICACION'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<any> {
    const credentials = { usuario, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}