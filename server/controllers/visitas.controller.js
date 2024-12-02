import { pool } from "../db.js";

export const getVisitas = async (req, res) => {
  console.log(req.query);

  try {
    let query = `
  SELECT 
    visitas.id_visita,
    visitas.id_usuario,
    usuarios.nombre,
    usuarios.document,
    usuarios.email,
    visitas.created_at
  FROM 
    visitas.visitas
  JOIN 
    usuarios 
  ON 
    usuarios.id = visitas.id_usuario
  WHERE 
    usuarios.estado = 1
`;

    const params = [];

    // Filtrar por rango de fechas
    if (req.query.from && req.query.to) {
      if (req.query.from !== req.query.to) {
        query += " AND visitas.created_at BETWEEN ? AND ?";
        params.push(req.query.from+"T00:00:00", req.query.to+"T00:00:00");
      } else {
        query += " AND date(visitas.created_at) = ?";
        params.push(req.query.from);
      }
    }

    // Filtrar por nombre
    if (req.query.nombre) {
      query += " AND usuarios.nombre LIKE ?";
      params.push(`%${req.query.nombre}%`);
    }

    // Filtrar por documento
    if (req.query.doc) {
      query += " AND usuarios.document = ?";
      params.push(req.query.doc);
    }

    const [result] = await pool.query(query, params);

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getVisita = async(req, res) => {
 
  try {
  const {id}= req.params;
 console.log(id);
 
  
  let query = `
  SELECT 
    visitas.id_visita,
    visitas.id_usuario,
    usuarios.nombre,
    usuarios.document,
    usuarios.email,
    visitas.created_at
  FROM 
    visitas.visitas
  JOIN 
    usuarios 
  ON 
    usuarios.id = visitas.id_usuario
  WHERE 
    usuarios.estado = 1 and visitas.id_visita=?
`;


const [result] = await pool.query(query, [id]);

res.json(result);
} catch (error) {
return res.status(500).json({ message: error.message });
}
};

export const createVisita = async (user_id) => {
  

  try {
    const [result] = await pool.query(
      "INSERT INTO visitas (id_usuario) VALUES (?)",
      [user_id]
    );
    return res.json(result);
  } catch (error) {
    return { message: error.message };
  }
};


