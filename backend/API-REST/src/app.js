import express from 'express';
import connection from '../infra/conection.js'
const app = express();

// read body with JSON
app.use(express.json());

function searchSelectionId(id) {
  return selections.find((selection) => selection.id === parseInt(id));
}

function searchIndexSelection(id) {
  return selections.findIndex((selection) => selection.id === parseInt(id));
}



// ROTAS
app.post('/selections', (request, response) => {
  // selections.push(request.body);
  const data = request.body;
  const sql = "INSERT INTO selections SET ?;"

  connection.query(sql, data, (error, result) => {
    if (error) {
      response.status(400).json({ 'erro': error });
    } else {
      response.status(201).json(result);
    }
  });

  // response.status(201).send('Seleçao cadastrada com sucesso!');
});

app.get('/selections', (request, response) => {
  const sql = "SELECT * FROM selections;"
  connection.query(sql, (error, result) => {
    if (error) {
      response.status(404).json({ 'erro': error });
    } else {
      response.status(200).json(result);
    }
  });
});


app.get('/selections/:id', (request, response) => {
  // response.json(searchSelectionId(request.params.id));
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

});


app.put('/selections/:id', (request, response) => {
  // const index = searchIndexSelection(request.params.id);
  // selections[index].selection = request.body.selection;
  // selections[index].group = request.body.group;

  // response.json(selections);
  
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


});


app.delete('/selections/:id', (request, response) => {
  // const index = searchIndexSelection(request.params.id);
  // selections.splice(index, 1);
  // response.send(`Selecão removida com id ${request.params.id} sucesso!`);

  const id = request.params.id;
  const sql = "DELETE FROM selections WHERE id=?;"
  connection.query(sql, id, (error, result) => {
    if (error) {
      response.status(404).json({ 'erro': error });
    } else {
      response.status(200).json(result);
    }
  });
});


export default app;
