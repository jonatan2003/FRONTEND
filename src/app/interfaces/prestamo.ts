
 
  // prestamo.interface.ts
  export interface Prestamo {
    idprestamo: number;
    idcliente: number;
    idusuario: number;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
    interes: number;
    estado: string;
    total: number;
    mora: number;
  }
  