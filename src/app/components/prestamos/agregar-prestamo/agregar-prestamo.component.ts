import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prestamos } from 'src/app/interfaces/oldinterfaces/prestamos';
import { PrestamosService } from 'src/app/services/oldservices/prestamos.service';
import { Productos } from 'src/app/interfaces/oldinterfaces/productos';
import { ProductosService } from 'src/app/services/oldservices/productos.service';
import { Clientes } from 'src/app/interfaces/oldinterfaces/clientes'; // Asegúrate de importar correctamente tu interfaz de Cliente
import { ClientesService } from 'src/app/services/oldservices/clientes.service';

@Component({
  selector: 'app-agregar-prestamo',
  templateUrl: './agregar-prestamo.component.html',
  styleUrls: ['./agregar-prestamo.component.css', '../../../../assets/vendor/fontawesome-free/css/all.min.css', '../../../../assets/css/sb-admin-2.min.css']
})
export class AgregarPrestamoComponent implements OnInit {

  form: FormGroup;
  productos: Productos[] = []; // Variable para almacenar los productos disponibles
  clientes: Clientes[] = []; // Variable para almacenar los clientes disponibles
  idempleado: string | null;
  idempleadoNumber: number | null;

  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _prestamosService: PrestamosService,
    private productosService: ProductosService,
    private clientesService: ClientesService, // Actualiza el nombre del servicio si es necesario

    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      idcliente: ['', Validators.required],
      idproducto: ['', Validators.required],
      idempleado: ['',Validators.nullValidator ],
      monto: ['', Validators.required],
      fecha_empeno:  [new Date().toISOString(), Validators.nullValidator],
  fecha_limite: [Validators.required]
      // ... Otros campos del formulario de préstamos
    });
    this.idempleado = localStorage.getItem("idempleado");
    this.idempleadoNumber = this.idempleado ? parseInt(this.idempleado, 10) : null;

    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getPrestamo(this.id);
    }
    this.obtenerProductos();
    this.obtenerClientes();
    console.log("el id empleado es "+ this.idempleado);

  }

  getFechaHoraLocal(): string {
    const fechaActual = new Date();
    const fechaLocal = fechaActual.toLocaleDateString('es-PE') + ' ' + fechaActual.toLocaleTimeString('es-PE');
    return fechaLocal;
  }

  obtenerProductos() {
    this.productosService.getListProductos().subscribe((data: Productos[]) => {
      this.productos = data;
    });
  }

  onProductoSelected(value: any) {
    const selectedProductId = value as number; // Realizar la conversión de tipo
    // Realiza las acciones que necesites con el ID del producto seleccionado
  }

  obtenerClientes() {
    this.clientesService.getListClientes().subscribe((data: Clientes[]) => {
      this.clientes = data; // Asigna los clientes obtenidos del servicio a la variable local
    });
  }

  onClienteSelected(value: any) {
    const selectedClientId = value as number; // Realiza la conversión de tipo si es necesario
    // Realiza las acciones que necesites con el ID del cliente seleccionado
  }

  getPrestamo(id: number) {
    this.loading = true;
    this._prestamosService.getPrestamo(id).subscribe((data: Prestamos) => {
      this.loading = false;
      this.form.setValue({
        idcliente: data.idcliente,
        idproducto: data.idproducto,
        idempleado: data.idempleado,
        monto: data.monto,
        fecha_empeno: new Date(this.form.value.fecha_empeno),
        fecha_limite: data.fecha_limite,
        // ... Otros campos del formulario de préstamos según la interfaz
      });
    });
  }

  addPrestamo() {
    const prestamo: Prestamos = {
      idcliente: this.form.value.idcliente,
      idproducto: this.form.value.idproducto,
      idempleado:  1,// Utilizando Number
      monto: this.form.value.monto,
      fecha_empeno:  this.form.value.fecha_empeno ? new Date(this.form.value.fecha_empeno) : new Date(),
      fecha_limite: this.form.value.fecha_limite,
      // ... Otros campos del formulario de préstamos según la interfaz
    };
    console.log("la fecha es "+ this.getFechaHoraLocal());

    this.loading = true;

    if (this.id !== 0) {
      // Es editar
      prestamo.id = this.id;
      this._prestamosService.updatePrestamo(this.id, prestamo).subscribe(() => {
        this.toastr.info(`El préstamo fue actualizado con éxito`, 'Préstamo actualizado');
        this.loading = false;
        this.router.navigate(['/prestamos']);
      });
    } else {
      // Es agregar
      this._prestamosService.savePrestamo(prestamo).subscribe(() => {
        this.toastr.success(`El préstamo fue registrado con éxito`, 'Préstamo registrado');
        this.loading = false;
        this.router.navigate(['/prestamos']);
      });
    }
  }
}