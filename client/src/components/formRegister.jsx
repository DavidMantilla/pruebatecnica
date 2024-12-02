import { register } from "../api/login.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";

export const FormRegister = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [documento, setDocumento] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onsubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await register({
        nombre: nombre,
        document: documento,
        email: correo,
        password: password,
      });
      if (res.status == 200) {
     
        const {id,nombre,email,token} = res.data;
              
        if (token) {
          dispatch(setUser({token,user:{id,nombre,email}})); // Almacena el token en Redux
        } // Almacena el token en Redux
     
        return navigate("/visitas");
      }
      // Manejo de la respuesta exitosa si es necesario
    } catch (error) {
      if (error.response && error.response.status !== 200) {
        setError(error.response.data.message);
      } else {
        setError("Ocurrió un error desconocido.");
      }
    }
  };

  return (
    <div className="loginform">
      <h1>Registro</h1>
      {error && <p className="error-message">{error}</p>}
      <form action="" onSubmit={onsubmit}>
        <label htmlFor="nombre">Usuario</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="documento">Documento</label>
        <input
          type="text"
          name="documento"
          className="form-control"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
        />

        <div className="container-button">
          <button className="form-button" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
