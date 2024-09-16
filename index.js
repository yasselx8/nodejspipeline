var express = require('express');
var app = express();

// Configuración para servir archivos estáticos como imágenes
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gobierno de la República Dominicana - Despliegue Exitoso</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #ffffff;
          color: #333;
        }
        .container {
          text-align: center;
          border: 5px solid #002D62; /* Azul bandera */
          padding: 50px;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-size: 3em;
          color: #002D62; /* Azul bandera */
          margin-bottom: 10px;
        }
        p {
          font-size: 1.5em;
          color: #CC092F; /* Rojo bandera */
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
        footer {
          margin-top: 30px;
          font-size: 0.9em;
          color: #777;
        }
        /* Bandera estilo en la parte inferior */
        .flag {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 20px;
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
      <div class="container">
        <img src="/logo-gobierno-rd.png" alt="Gobierno de República Dominicana">
        <h1>¡Despliegue Exitoso!</h1>
        <p>La aplicación del Gobierno de República Dominicana está en funcionamiento.</p>
        <a href="https://ambiente.gob.do" class="button">Visitar Sitio Oficial</a>
        <footer>&copy; 2024 Gobierno de la República Dominicana. Todos los derechos reservados.</footer>
      </div>
      
      <!-- Bandera -->
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
