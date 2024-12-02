import { pool } from "../db.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import {createVisita} from "../controllers/visitas.controller.js";
// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM usuarios WHERE estado=1");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// Obtener un usuario por ID
export const getuser = async (req, res) => {
  try {
    let id = req.user.id;

    const [result] = await pool.query("Select * from usuarios where id=?", [
      id,
    ]);
    if (result.length === 0)
        return res.status("404").json({ message: "no se encuentra el usuario" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo usuario (registro)
export const createUser = async (req, res) => {
  try {
    const { nombre, email,document, password } = req.body;
    

    const [response] = await pool.query(
      "Select * from usuarios where email=?",
      [email]
    );
    console.log(response);

    if (response.length > 0) {
      return res.status(400).json({ message: "el correo ya existe" });
    }
    const passwordhash = await bcrypt.hash(password, 10);
  
    
    const [result] = await pool.query(
      "insert into usuarios (nombre,document,email,password,created_at,estado) values(?,?,?,?,current_timestamp(),1)",
      [nombre,document,email, passwordhash]
    );

    const token = await createAccessToken({ id: result.insertId });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });
    createVisita(result.insertId);
    return res.json({
      id: result.insertId,
      nombre: nombre,
      email: email,
      token:token
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// Actualizar un usuario
export const updateUser = async (req, res) => {
  try {
    let { nombre,document,email, password } = req.body;
    password = await bcrypt.hash(password, 10);
    const result = await pool.query("UPDATE usuarios SET ? WHERE id=?", [
      { nombre,document,email, password },
      req.params.id,
    ]);

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//deshabilitar usuario
export const deleteUser = async (req, res) => {
    try {
  
       const result = await pool.query("UPDATE usuarios SET estado=0 WHERE id=?", [req.params.id]);
       res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


// login
export const login = async (req, res) => {
    try {
      const {email, password } = req.body;
      
  
      const [response] = await pool.query(
        "Select * from usuarios where email=? and estado=1",
        [email]
      );
  
      if (response.length === 0) 
        return res.status(400).json({message:"no se encuentra el usuario"})
      
        const isMatch= await bcrypt.compare(password,response[0].password);
        if(!isMatch)
            return res.status(400).json({message:"contraseña incorrecta"})
            
      const token = await createAccessToken({ id: response[0].id });
  
      res.cookie("token", token, {
        httpOnly: process.env.NODE_ENV !== "development",
        secure: true,
        sameSite: "none",
      });
      createVisita( response[0].id);
      return res.json({
        id: response[0].id,
        nombre: response[0].nombre,
        email: email,
        token:token
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const logout = async (req, res) => {

    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
      });
      return res.sendStatus(200);
  }
 