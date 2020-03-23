const express = require("express");

const app = express();

app.listen(3333);

app.get("/", (request, response) => {
  response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Yarlley Silva"
  });
});