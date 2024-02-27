import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css', '../../../assets/vendor/fontawesome-free/css/all.min.css', '../../../assets/css/sb-admin-2.min.css']
})
export class CabeceraComponent implements OnInit {
  nombreUsuario: string | null;

  constructor(private cd: ChangeDetectorRef, private router: Router) {
    this.nombreUsuario = localStorage.getItem('usuario');
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario'); // Asegúrate de eliminar el usuario del localStorage al cerrar sesión
    this.nombreUsuario = null; // Establece la variable en null
    this.cd.detectChanges(); // Detecta los cambios en la variable
    // Redirige al usuario a la página de inicio de sesión u otra página relevante.
    // Por ejemplo:
    this.router.navigate(['/login']);
  }
}
