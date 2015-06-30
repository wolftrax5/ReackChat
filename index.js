/*
 * Module dependencies
 */
 //Servidor 
import express from 'express';
import http from 'http'; // este ya viene cargado junto con Node asi que no hace falta instalarlo
import engine from 'socket.io';
import dbapi from './db-api'

const port = 3000;
const app = express();

//Configuracion de la ruta de archivos estaticos 
app.use('/',express.static(__dirname + '/public'));
app.use('/',express.static(__dirname + '/Vendor'));

app.get('/pokemons', (req, res) => {
  dbapi.pokemons.find((pokemons) => {
    res.json(pokemons);
  })
});

app.get('/',(req,res) => {
	res.sendFile(__dirname + '/index.html');
})

let server = http.createServer(app).listen(port,()=> {
	console.log(`Estamos en el puerto ${port}`);
});
const io = engine.listen(server);

io.on('connection',(socket)=>{
	socket.on('message',(msg)=>{
		io.emit('message',msg);
	})
})