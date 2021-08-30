const Contenedor = require('./containers/contenedor.js');
const express = require('express')
//const app = require('./routes/routes.js');

const app = express()
const archivo = new Contenedor("./productos.txt");

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.send({ mensaje: 'Bienvenidos a Productos' })
})

app.get('/productos', async (req, res) => {
    try {
        const lista = await archivo.getAll();
        res.send({
            productos: lista
        });
    } catch (error) {
        console.log(error)
    }
})

app.get('/productoRandom', async (req, res) => {
    try {
        const lista = await archivo.getAll();
        let prodRand = Math.floor(Math.random() * lista.length) + 1;
        const producto = await archivo.getById(prodRand)
        res.send({
            productos: producto
        });
    } catch (error) {
        console.log(error)
    }
})

//archivo.getAll()

//BORRAR PRODUCTO
//archivo.deleteById(2) 

//BORRAR TODOS LOS PRODUCTOS
//archivo.deleteAll()

//BUSCAR PRODUCTO
//archivo.getById(3)

//GRABAR PRODUCTO
/*archivo.save(
    {
        "title": "Bazar",
        "price": 558.00,
        "thumbmail": "foto5"
    }
)*/
