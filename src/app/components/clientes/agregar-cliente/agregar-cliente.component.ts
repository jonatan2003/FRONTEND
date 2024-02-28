import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from 'src/app/services/oldservices/clientes.service';
import { Clientes } from 'src/app/interfaces/oldinterfaces/clientes';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css', '../../../../assets/vendor/fontawesome-free/css/all.min.css', '../../../../assets/css/sb-admin-2.min.css']
})
export class AgregarClienteComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _clientesService: ClientesService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      direccion: ['', Validators.required],
      sexo: ['', Validators.required],
      // ... Otros campos del formulario de clientes
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      // Es editar
      this.operacion = 'Editar';
      this.getCliente(this.id);
    }
  }

  getCliente(id: number) {
    this.loading = true;
    this._clientesService.getCliente(id).subscribe((data: Clientes) => { // Corregido a 'Cliente'
      this.loading = false;
      this.form.setValue({
        nombre: data.nombre,
        apellido: data.apellido,
        dni: data.dni,
        direccion: data.direccion,
        sexo: data.sexo,
        // ... Otros campos del formulario de clientes según la interfaz
      });
    });
  }

  addCliente() {
    const cliente: Clientes = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      dni: this.form.value.dni,
      direccion: this.form.value.direccion,
      sexo: this.form.value.sexo,
      // ... Otros campos del formulario de clientes según la interfaz
    };

    this.loading = true;

    if (this.id !== 0) {
      // Es editar
      cliente.id = this.id;
      this._clientesService.updateCliente(this.id, cliente).subscribe(() => {
        this.toastr.info(`El cliente ${cliente.nombre} fue actualizado con éxito`, 'Cliente actualizado');
        this.loading = false;
        this.router.navigate(['/home-prestamos']);
      });
    } else {
      // Es agregar
      this._clientesService.saveCliente(cliente).subscribe(() => {
        this.toastr.success(`El cliente ${cliente.nombre} fue registrado con éxito`, 'Cliente registrado');
        this.loading = false;
        this.router.navigate(['/home-prestamos']);
      });
    }
  }
}