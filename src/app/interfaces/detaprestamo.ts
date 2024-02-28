 // detaprestamo.interface.ts
 export interface DetallePrestamo {
    iddetaprestamo: number;
    idprestamo: number;
    idarticulo: number;
    cantidad: number;
    precio: number;
    saldo_prestamo: number;
    saldo_pagar: number;
    saldo_pagado: number;
  }