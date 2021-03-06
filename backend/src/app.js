const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

//Se o projeto já não estiver mais em produção mude o CORS para:

// app.use(cors({
//   origin: "http://meusiteapp.com"
// }));