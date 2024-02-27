import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<boolean> {
    const credentials = { usuario, password };

    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token); // Almacena el token en el localStorage
          localStorage.setItem('idempleado', response.idempleado);

          console.log('AuthService: Token almacenado en el localStorage:', response.token);
        } else {
          console.log('AuthService: Respuesta del servidor:', response);
          console.log('Empleado id es:', response.idempleado);

        }
      })
    );
  }
  
  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('AuthService: Obteniendo token del localStorage...', token);
    return token;
  }


  isTokenExpired(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return true; // Si no hay token, se considera como expirado
    }

    const tokenData = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = tokenData.exp * 1000; // Multiplicado por 1000 para convertir a milisegundos
    const currentTime = new Date().getTime();

    return currentTime > expirationTime; // Devuelve true si el token ha expirado
  }

}
