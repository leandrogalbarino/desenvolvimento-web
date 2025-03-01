import { consult } from '../database/connection.js'

class SelectionRepository {
  // CRUD
  create(data) {
    const sql = "INSERT INTO selections SET ?;"
    const mensageError = 'Não foi possível criar.';
    return consult(sql, data, mensageError)
  }

  findAll() {
    const sql = "SELECT * FROM selections;"
    const mensageError = 'Não foi possível localizar nenhuma seleção.';
    return consult(sql, mensageError);
  }

  findById(id) {
    const sql = "SELECT * FROM selections WHERE id=?;"
    const mensageError = `Não foi possível localizar um seleção com id=${id}.`;
    return consult(sql, id, mensageError);
  }

  update(id, data) {
    const sql = "UPDATE selections SET ? WHERE id=?;"
    const mensageError = `Não foi possível atualizar o dado com id=${id}`;
    return consult(sql, [data, id], mensageError);
  }

  delete(id) {
    const sql = "DELETE FROM selections WHERE id=?;"
    const mensageError = `Não foi possível deletar o dado com id=${id}`;
    return consult(sql, id, mensageError);
  }
}

export default new SelectionRepository();