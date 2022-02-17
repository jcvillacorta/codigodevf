// El modelo trae los datos de la base de datos
// No se encarga de validar datos ni resolver promesas, eso es trabajo del controlador MVC.

// Paso 1. Necesito traer la configuración del entorno de knex y los detalles de la conexión a la base de datos
const knex = require ('../config');

// Paso2. Crear una función que traiga los datos que yo requiera de la base de datos
const create = (bodyGrocery) =>{
    // Crear un registro en la tabla Homes
    // bodyHome es un objeto que contiene los valores a insertar

    return knex
        .insert(bodyGrocery) // ¿Qué datos voy a insertar? { title: 'titulo0, address: 'x'}
        .into('groceries') // ¿De qué tabla? - Homes
        .returning(['sku', 'name', 'description', 'price'])
}
// Hago la funcion para listar todas las casas que ya creé
const findAll = () => { 
    // Como quiero todos los registros, no le paso ningún parámetro
    return knex
        .select(['house_id', 'title', 'description', 'guests', 'address', 'active', 'created_at'])
        .from('homes')
}
// Hago funcion para listar un solo registro con su id
const findOne = (houseId) =>{
    // Select title, description ... etc From 'homes' Where house_id = houseId
    return knex
        .select(['house_id', 'title', 'description', 'guests', 'address', 'active', 'created_at'])
        .from('homes')
        .where({house_id: houseId});
}

// Hago funcion update
const update = (houseId, bodyToUpdate) => {
    // necesito el id y la información que voy a actualizar
    return knex
        .update(bodyToUpdate) // la información a actualizar
        .from('homes')
        .where({house_id: houseId})
        .returning(['house_id', 'title', 'description', 'guests', 'address', 'active', 'created_at'])
}

// Hago funcion borrado real
const destroy = (houseId) =>{
    return knex
        .del() //delete
        .from('homes')
        .where({house_id: houseId})
}

// Hago funcion borrado logico/ Cambio de true a false
const softDelete = (houseId) =>{
    return knex
        .update({active: false})
        .from('homes')
        .where({house_id: houseId})
}

// Paso 3. Exportar mis funciones para que sean accesibles desde el controlador
module.exports = {
    create
}