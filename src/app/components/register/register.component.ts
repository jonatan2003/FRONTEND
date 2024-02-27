import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el módulo Router para la redirección
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',  
  styleUrls: ['./register.component.css','../../../assets/vendor/fontawesome-free/css/all.min.css','../../../assets/css/sb-admin-2.min.css']
})
export class RegisterComponent {


loginForm: FormGroup;

constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
  this.loginForm = this.formBuilder.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required],
  });
}

onSubmit() {
  if (this.loginForm !== null) {
    const formData = this.loginForm.value;

    const usuario = formData.usuario;
    const password = formData.password;

    if (usuario && password) {
      this.authService.login(usuario, password).subscribe(
        (response) => {
          // Manejar una respuesta exitosa aquí
          console.log('Logeo Exitoso'); // Por ejemplo, redirigir al usuario a la página de menú
          this.router.navigate(['/menu']);
        },
        (error) => {
          if (error.status === 404) {
            // El nombre de usuario es incorrecto
            console.error('Nombre de usuario incorrecto');
          } else if (error.status === 401) {
            // La contraseña es incorrecta
            console.error('Contraseña incorrecta');
          } else {
            // Otras situaciones de error
            console.error('Error inesperado:', error);
          }
        }
      );
    }
  }
}
}
