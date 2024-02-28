export interface Prestamos {
    id?: number;
    idcliente: number;
    idproducto: number;
    idempleado: number;
    monto: number;
    fecha_empeno: Date;
    fecha_limite: Date;
  }