const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from categories');
}

const getById = (categoryId) => {
  return executeQueryOne('select * from categories where id = ?', [categoryId]);
}

const create = ({ description }) => {
  return executeQuery('insert into categories (description) values (?)', [description]);
}

const updateById = (categoryId, description) => {
  return executeQuery('update categories set description = ? where id = ? ', [description, categoryId]);
}

const deleteById = (categoryId) => {
    return executeQuery('delete from categories where id = ?', [categoryId]);
}

module.exports = {
  getAll, getById, create, updateById, deleteById
}