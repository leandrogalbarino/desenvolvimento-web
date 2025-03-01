import SelectionRepository from "../repositories/SelectionRepository.js";

class SelectionController {

  async index(request, response) {
    const row = await SelectionRepository.findAll();
    response.json(row);
  }

  async show(request, response) {
    const id = request.params.id;
    const row = await SelectionRepository.findById(id);
    response.json(row)
  }

  async store(request, response) {
    const data = request.body;
    const row = await SelectionRepository.create(data);
    response.json(row);
  }

  async update(request, response) {
    const id = request.params.id;
    const data = request.body;
    const row = await SelectionRepository.update(id, data);
    response.json(row)
  }

  async delete(request, response) {
    const id = request.params.id;
    const row = await SelectionRepository.delete(id);
    response.json(row)
  }

}

export default new SelectionController();