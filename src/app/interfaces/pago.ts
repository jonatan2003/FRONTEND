
  // pagos.interface.ts
  export interface Pago {
    idpago: number;
    idprestamo: number;
    monto: number;
    fecha_pago: Date;
    estado: string;
  }
  