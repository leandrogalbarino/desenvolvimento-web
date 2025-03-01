import mysql from "mysql";

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'kise',
  database: 'db_cup'
});

connection.connect();


/**
 * 
 * @param {string} sql instrução sql a ser executada.
 * @param {string=id | [selection, id]} values a serem passados para o sql.
 * @param {string} mensageReject mensagem a ser exibida caso de erro.
 * @returns objeto da Promise
 */

export const consult = (sql, values = '', mensageReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, result) => {
      if (error) return reject(mensageReject);
      return resolve(result);
    });

  });
}

export default connection;