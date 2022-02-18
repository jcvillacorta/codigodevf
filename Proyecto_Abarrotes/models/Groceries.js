// El modelo trae los datos de la base de datos
// No se encarga de validar datos ni resolver promesas, eso es trabajo del controlador MVC.

// Paso 1. Necesito traer la configuración del entorno de knex y los detalles de la conexión a la base de datos
const knex = require ('../config');

// Paso2. Crear una función que traiga los datos que yo requiera de la base de datos
const create = (bodyGrocery) =>{
    return knex
        .insert(bodyGrocery) // ¿Qué datos voy a insertar? { title: 'titulo0, address: 'x'}
        .into('groceries') // ¿De qué tabla? - Homes
        .returning(['sku', 'name', 'description', 'price'])
}

// Crear para tabla customers
const createCustomer = (bodyCustomer) =>{
    return knex
        .insert(bodyCustomer) // ¿Qué datos voy a insertar? { title: 'titulo0, address: 'x'}
        .into('customers') // ¿De qué tabla? - Homes
        .returning(['customer_id', 'first_name', 'last_name', 'email', 'phone', 'address', 'suburb', 'postal_code'])
}

// Crear para tabla sales
const createSales = (bodySales) =>{
    return knex
        .insert(bodySales) // ¿Qué datos voy a insertar? { title: 'titulo0, address: 'x'}
        .into('sales') // ¿De qué tabla? - Homes
        .returning(['sale_id', 'sku', 'customer_id', 'quantity'])
}

// Hago la funcion para listar todas las groceries que ya creé
const findAllGroceries = () => { 
    // Como quiero todos los registros, no le paso ningún parámetro
    return knex
        .select(['sku', 'name', 'description', 'price'])
        .from('groceries')
}

// Crear FindAll para tabla customers

const findAllCustomers = () => { 
    // Como quiero todos los registros, no le paso ningún parámetro
    return knex
        .select(['customer_id', 'first_name', 'last_name', 'email', 'phone', 'address', 'suburb', 'postal_code'])
        .from('customers')
}

// Crear FindAll para tabla sales

const findAllSales = () => { 
    // Como quiero todos los registros, no le paso ningún parámetro
    return knex
        .select(['sale_id', 'sku', 'customer_id', 'quantity'])
        .from('sales')
}

// Hago funcion para listar un solo registro con su id
const findOneGrocery = (sku_id) =>{
    return knex
        .select(['sku', 'name', 'description', 'price'])
        .from('groceries')
        .where({sku: sku_id});
}

// Crear findOne para tabla customers
const findOneCustomer = (customerId) =>{
    return knex
        .select(['customer_id', 'first_name', 'last_name', 'email', 'phone', 'address', 'suburb', 'postal_code'])
        .from('customers')
        .where({customer_id: customerId});
}

// Hago funcion update
const update = (sku_id, bodyToUpdate) => {
    // necesito el id y la información que voy a actualizar
    return knex
        .update(bodyToUpdate) // la información a actualizar
        .from('groceries')
        .where({sku: sku_id})
        .returning(['sku', 'name', 'description', 'price'])
}

// crear update para tabla customers
const updateCustomer = (customerId, bodyToUpdate) => {
    // necesito el id y la información que voy a actualizar
    return knex
        .update(bodyToUpdate) // la información a actualizar
        .from('customers')
        .where({customer_id: customerId})
        .returning(['customer_id', 'first_name', 'last_name', 'email', 'phone', 'address', 'suburb', 'postal_code'])
}


// Hago funcion borrado real
const destroy = (sku_id) =>{
    return knex
        .del() //delete
        .from('groceries')
        .where({sku: sku_id})
}

// Crear destroy para tabla customers
const destroyCustomer = (customerId) =>{
    return knex
        .del() //delete
        .from('customers')
        .where({customer_id: customerId})
}

// Hago funcion borrado logico/ Cambio de true a false
// const softDelete = (houseId) =>{
//     return knex
//         .update({active: false})
//         .from('homes')
//         .where({house_id: houseId})
// }

// Paso 3. Exportar mis funciones para que sean accesibles desde el controlador
module.exports = {
    create,
    createCustomer,
    createSales,
    findAllGroceries,
    findAllCustomers,
    findAllSales,
    findOneGrocery,
    findOneCustomer,
    update,
    updateCustomer,
    destroy,
    destroyCustomer
}