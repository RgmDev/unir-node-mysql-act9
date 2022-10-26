const executeQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
      db.query(sql, params, (err, result) => {
          if (err) return reject(err);
          resolve(result);
      });
  });
}

const executeQueryOne = (sql, params = []) => {
  return new Promise((resolve, reject) => {
      db.query(sql, params, (err, result) => {
          if (err) return reject(err);
          if (result.length === 0) return resolve(null);
          resolve(result[0]);
      });
  });
}

function getChangesForUpdate(body, keys = []) {
  let changes = [];
  for (const [key, value] of Object.entries(body)) {
    if (keys.indexOf(key) > -1) {
      changes.push([key, value]);
    }
  }
  return changes;
}

module.exports = { executeQuery, executeQueryOne, getChangesForUpdate };