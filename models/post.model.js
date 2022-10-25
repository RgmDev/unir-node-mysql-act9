const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getByPage = (page, limit) => {
  return executeQuery('select * from posts limit ? offset ?', [limit, (page - 1) * limit]);
}

const getById = (postId) => {
  return executeQueryOne('select * from posts where id = ?', [postId]);
}

const getByAuthorId = (authorId) => {
  return executeQuery('select * from posts where authors_id = ?', [authorId]);
}



const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery('insert into clientes (nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]);
}

const deleteById = (clientId) => {
    return executeQuery('delete from clientes where id = ?', [clientId]);
}

module.exports = {
  getByPage, getById, getByAuthorId, create, deleteById
}