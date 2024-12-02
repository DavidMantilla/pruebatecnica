import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice'; // Asegúrate de que la ruta sea correcta

export const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Limpia el estado en Redux
    navigate('/'); // Redirige a la página principal o de login
  };

  return (
    <div className="navbar">
      <h1>Gestión de Visitas</h1>
      <ul>
        <li>
          <Link to="/visitas">Visitas</Link>
        </li>
        <li>
          <Link to="/usuarios">Administrar Usuarios</Link>
        </li>
        {user ? (
          <>
            <li>
              {user.nombre}
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Iniciar sesión</Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
