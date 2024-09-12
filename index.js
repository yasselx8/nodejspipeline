var express = require('express');
var app = express();

// Configuración de una ruta para servir archivos estáticos
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DESPLEGANDO JENKINS</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          color: #fff;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 0.5em;
        }
        p {
          font-size: 1.5em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>¡Desplegando Jenkins!</h1>
        <p>Tu aplicación está en funcionamiento.</p>
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
