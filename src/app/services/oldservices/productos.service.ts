import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Productos } from '../../interfaces/oldinterfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/productos/'
  }

  getListProductos(): Observable<Productos[]> {
   return this.http.get<Productos[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveProducto(productos: Productos): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,productos)
  }

  getProducto(id: number): Observable<Productos> {
    return this.http.get<Productos>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateProducto(id: number, productos: Productos): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, productos);
  }
}
