//Funcionalidades de LOGIN das rotas de uma especica ONG.

const connection = require("../database/connection");

//Verifica se uma ONG existe ao fazer o Login
module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return response.status(400).json({ erro: "No ONG found with this ID." })
    }

    return response.json(ong);
  }
}