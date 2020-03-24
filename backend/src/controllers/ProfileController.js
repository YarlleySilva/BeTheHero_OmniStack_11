//Uma das funcionalidades das rotas de uma especica ONG.

const connection = require("../database/connection");

//Lista todos os Casos de uma especifica ONG
module.exports = {
  async index(request, response) {

    //Pegando o ID da ONG que está LOGADA
    const ong_id = request.headers.authorization;

    //Buscando os Casos criados pela ONG com o ID (ong_id)
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(incidents);
  }
}