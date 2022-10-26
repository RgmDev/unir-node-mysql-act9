const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from authors');
}

const getById = (categoryId) => {
  return executeQueryOne('select * from authors where id = ?', [categoryId]);
}

const create = ({ name, email, image }) => {
  return executeQuery('insert into authors (name, email, image) values (?, ?, ?)', [name, email, image]);
}

const updateById = (authorId, changes) => {
  let set = '';
  for (const [key, value] of changes) {
    set += `${key} = '${value}', `;
  }
  set = set.substring(0, set.length - 2);
  let query = `update authors set ${set} where id = ${authorId}`;
  console.log(query);
  return executeQuery(query);
}

const deleteById = (categoryId) => {
  return executeQuery('delete from authors where id = ?', [categoryId]);
}

module.exports = {
  getAll, getById, create, updateById, deleteById
}