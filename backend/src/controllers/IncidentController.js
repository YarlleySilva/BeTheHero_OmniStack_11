//Todas as funcionalidades das rotas de Incidents (Casos de Ongs);

const connection = require("../database/connection");

module.exports = {

  //Lista todos os casos de todas as ONGs por página limite de 5.
  async index(request, response) {

    const { page = 1 } = request.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(incidents);
  },

  //Cria um novo Caso de uma ONG
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });
    return response.json({ id });
  },

  //Deleta um Caso de uma ONG
  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ erro: "Operation not permitted." });
    }

    await connection("incidents").where("id", id).delete();

    return response.status(204).send();
  }
};