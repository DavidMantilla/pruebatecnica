import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/login.api";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from '../store/authSlice';

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await login({ email, password });
      if (res.status == 200) {
        const {id,nombre,email} = res.data;
        
        const token = Cookies.get(); 
         console.log(token);
         
        if (token) {
          dispatch(setUser({token,user:{id,nombre,email}})); // Almacena el token en Redux
          
          
        }
        return navigate("/visitas");
      }

      // Manejo de la respuesta exitosa, por ejemplo, guardar el token y redirigir
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
      <h1>Inicio de sesión</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
