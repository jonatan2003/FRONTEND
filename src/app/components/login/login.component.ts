import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../assets/css/login.css' ],
})
export class LoginComponent {
  loginForm: FormGroup;
  private token: string | null = null; // Propiedad para almacenar el token
   

  constructor(private authService: AuthService,
     private formBuilder: FormBuilder, 
         private toastr: ToastrService,
     private router: Router) {
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

      localStorage.setItem('usuario',usuario);

      if (usuario && password) {
        this.authService.login(usuario, password).subscribe(
          (response:any) => {
            console.log('Logeo Exitoso');
            
           

            localStorage.setItem('token', response.token);
            localStorage.setItem('idempleado', response.idempleado);

            console.log('usuario ', response.usuario);
                    this.toastr.success('Inicio de Sesión Exitosa');

            console.log('Login Componente: Token almacenado ', response.token);
            console.log('Login Componente: idempleado ', response.idempleado);

          this.router.navigate(['/home']);   
        },
          (error) => {
            if (error.status === 404) {
              this.toastr.warning('Nombre de usuario incorrecto');

              console.error('Nombre de usuario incorrecto');
            } else if (error.status === 401) {
              // La contraseña es incorrecta, muestra la alerta
              this.toastr.warning('Nombre de usuario incorrecto');


            } else {
              console.error('Error inesperado:', error);
            }
          }
        );
      }
    }
  }

 
}