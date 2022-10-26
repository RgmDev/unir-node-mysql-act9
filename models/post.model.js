const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getByPage = (page, limit) => {
  return executeQuery('select p.*, a.name as author_name, a.email as author_email, a.image as author_image from posts p left join authors a on p.authors_id = a.id limit ? offset ?', [limit, (page - 1) * limit]);
}

const getById = (postId) => {
  return executeQueryOne('select p.*, a.name as author_name, a.email as author_email, a.image as author_image from posts p left join authors a on p.authors_id = a.id where p.id = ?', [postId]);
}

const create = ({ title, description, post_date, authors_id, categories_id }) => {
    return executeQuery('insert into posts (title, description, post_date, authors_id, categories_id) values (?, ?, ?, ?, ?)', [title, description, post_date, authors_id, categories_id]);
}

const updateById = (postId, changes) => {
  let set = '';
  for (const [key, value] of changes) {
    set += `${key} = '${value}', `;
  }
  set = set.substring(0, set.length - 2);
  let query = `update posts set ${set} where id = ${postId}`;
  console.log(query);
  return executeQuery(query);
}

const deleteById = (postId) => {
    return executeQuery('delete from posts where id = ?', [postId]);
}

const getByAuthorId = (authorId) => {
  return executeQuery('select p.*, a.name as author_name, a.email as author_email, a.image as author_image from posts p left join authors a on p.authors_id = a.id where authors_id = ?', [authorId]);
}

module.exports = {
  getByPage, getById, create, updateById, deleteById, getByAuthorId
}