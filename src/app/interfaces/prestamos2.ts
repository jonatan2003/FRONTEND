export interface Prestamos {
    id?: number;
    idcliente: number;
    idproducto: number;
    idempleado: number;
    monto: number;
    fecha_empeno: Date;
    fecha_limite: Date;
    Cliente?: Cliente; // Relación con la tabla Cliente
    Empleado?: Empleado; // Relación con la tabla Empleado
    Producto?: Producto; // Relación con la tabla Producto
}

export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    // Otros campos relacionados con Cliente
}

export interface Empleado {
    id: number;
    nombre: string;
    apellido: string;
    // Otros campos relacionados con Empleado
}

export interface Producto {
    id: number;
    descripcion: string;
    fecha_hora: Date;
    // Otros campos relacionados con Producto
}
