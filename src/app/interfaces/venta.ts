
  // venta.interface.ts
  export interface Venta {
    idventa: number;
    idprestamo?: number; // Puede ser nulo si no está asociado a un préstamo
    fechaVenta: Date;
    precio: number;
    comprador: string;
    total: number;
  }
  