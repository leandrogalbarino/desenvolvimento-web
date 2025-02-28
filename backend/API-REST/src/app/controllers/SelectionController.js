import connection from '../database/connection.js'

class SelectionController {

  index(request, response) {
    const sql = "SELECT * FROM selections;"

    connection.query(sql, (error, result) => {
      if (error) {
        response.status(404).json({ 'erro': error });
      } else {
        response.status(200).json(result);
      }
    });
  }

  show(request, response) {
    const id = request.params.id;
    const sql = "SELECT * FROM selections WHERE id=?;"

    connection.query(sql, id, (error, result) => {
      const row = result[0];
      if (error) {
        response.status(404).json({ 'erro': error });
      } else {
        response.status(200).json(row);
      }
    });
  }

  store(request, response) {
    const data = request.body;
    const sql = "INSERT INTO selections SET ?;"
  
    connection.query(sql, data, (error, result) => {
      if (error) {
        response.status(404).json({ 'erro': error });
      } else {
        response.status(201).json(result);
      }
    });
  }
  
  update(request, response) {
    const id = request.params.id;
    const data = request.body;
    const sql = "UPDATE selections SET ? WHERE id=?;"

    connection.query(sql, [data, id], (error, result) => {
      if (error) {
        response.status(404).json({ 'erro': error });
      } else {
        response.status(200).json(result);
      }
    });
  }

  delete(request, response) {
    const id = request.params.id;
    const sql = "DELETE FROM selections WHERE id=?;"

    connection.query(sql, id, (error, result) => {
      if (error) {
        response.status(404).json({ 'erro': error });
      } else {
        response.status(200).json(result);
      }
    });
  }

}

export default new SelectionController();