var express = require('express');
var app = express();

// Configuración para servir archivos estáticos como imágenes y CSS
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gobierno de la República Dominicana - Página Oficial</title>
      <style>
        /* Estilos Globales */
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          color: #333;
        }

        /* Navegación */
        .navbar {
          background-color: #002D62; /* Azul bandera */
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
          font-size: 1.2em;
        }

        .navbar a:hover {
          color: #CC092F; /* Rojo bandera */
        }

        .navbar-logo img {
          max-width: 150px;
        }

        /* Contenido Principal */
        .container {
          text-align: center;
          padding: 50px;
        }

        h1 {
          font-size: 3em;
          color: #002D62; /* Azul bandera */
          margin-bottom: 10px;
        }

        p {
          font-size: 1.5em;
          color: #CC092F; /* Rojo bandera */
          margin-bottom: 30px;
        }

        img {
          max-width: 300px;
          margin-bottom: 20px;
        }

        .button {
          padding: 15px 30px;
          background-color: #002D62; /* Azul bandera */
          color: #ffffff;
          font-size: 1.2em;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .button:hover {
          background-color: #CC092F; /* Rojo bandera */
        }

        /* Footer */
        footer {
          background-color: #002D62;
          color: white;
          text-align: center;
          padding: 20px 0;
          position: relative;
          bottom: 0;
          width: 100%;
        }

        footer p {
          margin: 0;
        }

        /* Bandera en el pie de página */
        .flag {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10px;
          display: flex;
        }

        .flag div {
          flex: 1;
          height: 100%;
        }

        .flag .blue {
          background-color: #002D62; /* Azul bandera */
        }

        .flag .white {
          background-color: #ffffff; /* Blanco bandera */
        }

        .flag .red {
          background-color: #CC092F; /* Rojo bandera */
        }
      </style>
    </head>
    <body>
      <!-- Barra de Navegación -->
      <nav class="navbar">
        <div class="navbar-logo">
          <a href="/"><img src="/logo-gobierno-rd.png" alt="Logo Gobierno de la República Dominicana"></a>
        </div>
        <div class="navbar-links">
          <a href="/">Inicio</a>
          <a href="https://ambiente.gob.do">Sitio Oficial</a>
          <a href="/contacto">Contacto</a>
        </div>
      </nav>

      <!-- Contenido Principal -->
      <div class="container">
        <img src="/logo-gobierno-rd.png" alt="Gobierno de República Dominicana">
        <h1>¡Despliegue Exitoso!</h1>
        <p>La aplicación del Gobierno de República Dominicana está en funcionamiento.</p>
        <a href="https://ambiente.gob.do" class="button">Visitar Sitio Oficial</a>
      </div>

      <!-- Footer -->
      <footer>
        <p>&copy; 2024 Gobierno de la República Dominicana. Todos los derechos reservados.</p>
      </footer>

      <!-- Bandera al pie de página -->
      <div class="flag">
        <div class="blue"></div>
        <div class="white"></div>
        <div class="red"></div>
      </div>
    </body>
    </html>
  `);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App escuchando en http://%s:%s', host, port);
});
