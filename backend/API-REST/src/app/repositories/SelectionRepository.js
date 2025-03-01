import connection from '../database/connection.js'

class SelectionRepository {
  // CRUD
  create(data) {
    const sql = "INSERT INTO selections SET ?;"
    return new Promise((resolve, reject) => {
      connection.query(sql, data, (error, result) => {
        if (error) return reject({ 'erro': error });

        return resolve(result);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM selections;"
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject('Não foi possível localizar');
        return resolve(result);
        // const rows = JSON.parse(JSON.stringify(result));

      });
    });

  }

  findById(id) {
    const sql = "SELECT * FROM selections WHERE id=?;"

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject({ 'erro': error });
        // if (result.length === 0) return resolve(null);
        return resolve(result[0]);
        // const row = JSON.parse(JSON.stringify(result[0]));
        
      });

    });
  }

  update(id, data) {
    const sql = "UPDATE selections SET ? WHERE id=?;"

    return new Promise((resolve, reject) => {
      connection.query(sql, [data, id], (error, result) => {
        if (error) return reject(error);
        return resolve(result);

      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM selections WHERE id=?;"

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject({ 'erro': error });
        return resolve(result);

      });
    });

  }
}

export default new SelectionRepository();