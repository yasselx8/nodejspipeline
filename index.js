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
      <title>Despliegue con Jenkins - Gobierno de República Dominicana</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to right, #0066cc, #0099ff);
          color: #fff;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 3.5em;
          margin: 0.5em 0;
          color: #ffffff;
        }
        p {
          font-size: 1.5em;
          margin: 0.5em 0;
        }
        img {
          max-width: 150px;
          margin-bottom: 20px;
        }
        .button {
          padding: 15px 25px;
          background-color: #ffffff;
          color: #0066cc;
          border: none;
          font-size: 1.2em;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #cccccc;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="/logo-gobierno-rd.png" alt="Ministerio de Medio Ambiente y Recursos Naturales">
        <h1>¡Despliegue exitoso con Jenkins!</h1>
        <p>La aplicación del Gobierno de República Dominicana está en funcionamiento.</p>
        <button class="button" onclick="window.location.href='https://ambiente.gob.do'">Visitar el sitio oficial</button>
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
