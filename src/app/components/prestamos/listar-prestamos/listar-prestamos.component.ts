import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Prestamos } from '../../../interfaces/oldinterfaces/prestamos2';
import { PrestamosService } from 'src/app/services/oldservices/prestamos.service';

@Component({
  selector: 'app-listar-prestamos',
  templateUrl: './listar-prestamos.component.html',
  styleUrls: ['./listar-prestamos.component.css', '../../../../assets/vendor/fontawesome-free/css/all.min.css', '../../../../assets/css/sb-admin-2.min.css']
})
export class ListarPrestamosComponent implements OnInit {

 
  listPrestamos: Prestamos[] = [];
  loading: boolean = false;

  constructor(private _prestamosService: PrestamosService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListPrestamos();
  }

  getListPrestamos() {
    this.loading = true;

    this._prestamosService.getListPrestamos().subscribe((data: Prestamos[]) => {
      this.listPrestamos = data;
      this.loading = false;
      console.log(this.listPrestamos);
    });
  }

  deletePrestamo(id: number) {
    this.loading = true;
    this._prestamosService.deletePrestamo(id).subscribe(() => {
      this.getListPrestamos();
      this.toastr.warning('El préstamo fue eliminado con éxito', 'Préstamo eliminado');
    });
  }
}