import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Productos } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css', '../../../../assets/vendor/fontawesome-free/css/all.min.css', '../../../../assets/css/sb-admin-2.min.css']
})
export class AgregarProductoComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productosService: ProductosService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      fecha_hora: [new Date().toISOString().slice(0, 16)], // Establecer la fecha y hora actuales sin validación
      // ... Otros campos del formulario de productos
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProducto(this.id);
    }
  }

  getProducto(id: number) {
    this.loading = true;
    this._productosService.getProducto(id).subscribe((data: Productos) => {
      this.loading = false;
      this.form.setValue({
        descripcion: data.descripcion,
        fecha_hora: data.fecha_hora,
        // ... Otros campos del formulario de productos según la interfaz
      });
    });
  }

  addProducto() {
    const producto: Productos = {
      descripcion: this.form.value.descripcion,
      fecha_hora: this.form.value.fecha_hora,
      // ... Otros campos del formulario de productos según la interfaz
    };

    this.loading = true;

    if (this.id !== 0) {
      // Es editar
      producto.id = this.id;
      this._productosService.updateProducto(this.id, producto).subscribe(() => {
        this.toastr.info(`El producto ${producto.descripcion} fue actualizado con éxito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/home-prestamos']);
      });
    } else {
      // Es agregar
      this._productosService.saveProducto(producto).subscribe(() => {
        this.toastr.success(`El producto ${producto.descripcion} fue registrado con éxito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/home-prestamos']);
      });
    }
  }
}
