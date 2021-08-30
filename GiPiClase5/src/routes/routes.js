/*const express = require('express')
const app = express()

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

module.exports = app
*/
