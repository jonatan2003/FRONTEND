import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Productos } from 'src/app/interfaces/oldinterfaces/productos';
import { ProductosService } from 'src/app/services/oldservices/productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css', '../../../../assets/vendor/fontawesome-free/css/all.min.css', '../../../../assets/css/sb-admin-2.min.css']
})
export class ListarProductosComponent implements OnInit {

  listProductos: Productos[] = [];
  loading: boolean = false;

  constructor(private _productosService: ProductosService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProductos();
  }

  getListProductos() {
    this.loading = true;

    this._productosService.getListProductos().subscribe((data: Productos[]) => {
      this.listProductos = data;
      this.loading = false;
    });
  }

  deleteProducto(id: number) {
    this.loading = true;
    this._productosService.deleteProducto(id).subscribe(() => {
      this.getListProductos();
      this.toastr.warning('El producto fue eliminado con éxito', 'Producto eliminado');
    });
  }
}
