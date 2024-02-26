import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const login = async (req: Request, res: Response) => {
  const { usuario, password } = req.body;

  try {
    // Buscar el usuario por nombre de usuario
    const user: any = await Usuario.findOne({ where: { usuario } });

    if (!user) {
      return res.status(404).json({ msg: 'Nombre de usuario incorrecto' });
    }

    // Verificar la contraseña
    const hashedPasswordFromDB = user.get('password');
console.log('Contraseña ingresada:', password);
console.log('Contraseña almacenada:', hashedPasswordFromDB);

const match: any = await bcrypt.compare(password, hashedPasswordFromDB);
    if (!match) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    // Verificar el rol del usuario
    const idempleado = user.get('idempleado');
    const permisos = user.get('permisos');
    if ((permisos) !== "admin") {
      return res.status(403).json({ msg: 'Acceso no autorizado' });
    }

    // En este punto, el inicio de sesión es exitoso y el usuario tiene el rol correcto
    res.json({ msg: 'Inicio de sesión exitoso', permisos,idempleado });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error, comuníquese con soporte' });
  }
};
