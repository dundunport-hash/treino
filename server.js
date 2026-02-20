const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.use(cors());
app.use(jsonServer.bodyParser);
app.use(auth);
app.use(router);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});