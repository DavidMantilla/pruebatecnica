
Gestión de Visitas

Aplicación web para la gestión de visitas con autenticación, desarrollada en React y Redux, con un backend en Express.
Características principales

    Autenticación de usuarios: Inicio de sesión y cierre de sesión.
    Estado global: Manejo del estado de autenticación con Redux.
    Persistencia de sesión: Uso de localStorage para almacenar la información del usuario.
    Interfaz de navegación dinámica: Contenido que cambia dependiendo del estado de autenticación.

Tecnologías utilizadas

    Frontend:
        React
        Redux Toolkit
        React Router
    Backend:
        Node.js / Express
    Persistencia:
        localStorage
        Cookies (para almacenar el token de autenticación)

Instalación
Requisitos previos

    Node.js (v14 o superior)
    npm (v6 o superior)

Pasos para instalar:

    Clonar el repositorio:

git clone https://github.com/tu-repositorio/gestion-visitas.git

Instalar dependencias:

cd gestion-visitas
npm install

Configurar variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega las variables necesarias, como la URL del backend.

REACT_APP_API_URL=http://localhost:5000/api

Ejecutar la aplicación:

    npm start

Uso de la aplicación

    Inicio de sesión:
        Accede a la ruta principal (/) para iniciar sesión.
        La información del usuario se almacena en Redux y se persiste en localStorage.

    Navegación:
        La barra de navegación muestra diferentes opciones según si el usuario está autenticado.
        Rutas protegidas: Accede a /visitas solo si estás autenticado.

Estado de autenticación con Redux
Estructura del authSlice:

    Acciones:
        setUser: Guarda los datos del usuario y el token.
        logout: Limpia el estado de autenticación.
        setAuthError: Maneja errores de autenticación.

Persistencia en localStorage:

El estado de autenticación se guarda automáticamente en localStorage para mantener la sesión incluso si recargas la página.
Contribuir

    Haz un fork del repositorio.
    Crea una rama (git checkout -b feature-nueva-funcionalidad).
    Realiza tus cambios y haz un commit (git commit -m 'Descripción de los cambios').
    Envía un pull request.

Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
