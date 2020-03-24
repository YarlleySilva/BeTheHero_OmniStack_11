//Todas as funcionalidades das rotas de Ong

const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {

  //Lista todas as ONGs que já foram criadas
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },


  //Cria uma nova ONG dentro do Banco de Dados
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    response.json({ id });
  }
};

