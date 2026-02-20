Registro

POST /register

Login

POST /login

{
  "accessToken": "tokenJWT",
  "user": {
    "id": 1,
    "email": "teste@email.com"
  }
}

Problema comum no Codespaces

Se der erro CORS:

No server.js, deixe assim:

app.use(cors({
  origin: true,
  credentials: true
}));