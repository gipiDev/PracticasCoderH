const fs = require('fs')

class Contenedor {
    constructor(nombre) {
        this.nombre = nombre
    }

    async save(producto) {
        console.log("Insertando producto: ", producto)
        const datos = await this.getAll()
        //console.log("save ", datos)

        //Cuando parsee en getAll() poner esta línea en vez de <let datosJSON = JSON.parse(datos)>
        let datosJSON = datos

        //convierto a JSON para contar cantidad de registros
        //let datosJSON = JSON.parse(datos)
        if (datosJSON == 0) {
            producto.id = 1
        } else {
            producto.id = datosJSON.length + 1
        }
        datosJSON.push(producto)
        console.log("Producto insertado: ", producto)

        await fs.promises.writeFile(this.nombre, JSON.stringify(datosJSON))
    }

    async getById(idProducto) {
        const datos = await this.getAll()
        //console.log("find ", datos)
        //convierto a JSON para buscar con find
        //let datosJSON = JSON.parse(datos)
        let datosJSON = datos

        console.log("Busco producto: ", idProducto)
        const productoEncontrado = datosJSON.find(e => e.id == idProducto);
        console.log("Producto encontrado: ", idProducto, productoEncontrado)
        return productoEncontrado
    }

    async getAll() {
        try {
            const datos = await fs.promises.readFile(this.nombre, 'utf-8')
            console.log("ARCHIVO LEIDO: ", this.nombre)
            //console.log("DATOS: ", datos)
            const datosParse = JSON.parse(datos);
            console.log("DATOS JSON: ", datosParse)
            return datosParse
            //return datos

            //Para Parsear acá y no hacerlo en todas las funciones usar esto
            //const datosParse = JSON.parse(datos);
            //console.log("ARCHIVO DATOS PARSEADOS: ", datosParse)
            //return datosParse
        }
        catch (err) {
            throw new Error(`Error en lectura: ${err}`)
        }
    }
}

module.exports = Contenedor
