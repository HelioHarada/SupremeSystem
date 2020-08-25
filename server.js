
// importa configuração do Express e do banco de dados
var express = require('express');
var path = require('path');
// var compression = require('compression')
var serveStatic = require('serve-static');

app = express ();
// app.use(compression())
app.use(serveStatic(__dirname));

app.get('*', function (req, res) {
    const index = path.join(__dirname, '/dist/index.html');
    console.log(__dirname);
    res.sendFile(index)
});

var port = process.env.PORT || 21058;
// passa a porta definida no Express e levantamento do servidor
app.listen(port);
console.log ('Servidor client iniciado na porta ' + port + '.');
