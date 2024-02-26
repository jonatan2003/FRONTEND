import express, { Application, Request, Response } from 'express';
import cors from 'cors';



import RolesRouter from './routes/oldsroutes/roles';
import PrestamosRouter from './routes/prestamo';
import ClientesRouter from './routes/cliente';
import ArticulosRouter from './routes/articulo';
import ModelosRouter from './routes/modelo';
import MarcasRouter from './routes/marca';
import VentasRouter from './routes/venta';
import DetaprestamosRouter from './routes/detaprestamo';
import DetaventasRouter from './routes/detaventa';
import Usuariorouter from './routes/usuario';
import db from './db/connection';
import Prestamos2Router from './routes/oldsroutes/prestamos2';
import Loginrouter from './routes/login';
import EmpleadosRouter from './routes/empleado';


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
    

        this.app.use('/api/login', Loginrouter); 

        this.app.use('/api/usuarios', Usuariorouter); 
        this.app.use('/api/clientes', ClientesRouter);
        this.app.use('/api/articulos', ArticulosRouter);
        this.app.use('/api/modelos', ModelosRouter);
        this.app.use('/api/marcas', MarcasRouter);
        this.app.use('/api/detaprestamos', DetaprestamosRouter);
        this.app.use('/api/prestamos', PrestamosRouter);
        this.app.use('/api/detaventas', DetaventasRouter);
        this.app.use('/api/ventas', VentasRouter);
        this.app.use('/api/roles', RolesRouter);
        this.app.use('/api/empleados', EmpleadosRouter);

        this.app.use('/api/prestamos2', Prestamos2Router);

    }

    midlewares() {

        // Parseamos el body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada')
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }

       
    }


}

export default Server;