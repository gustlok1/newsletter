const mysql = require('mysql');
const cors = require("cors");
module.exports = function (app) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const config = {
    user: 'matiolli',
    password: '123123123123123',
    server: 'localhost',
    database: 'NEWSLETTER',
  };

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  sql.connect(config, (err) => {
    if (err) {
      console.error("Erro ao conectar ao SQL Server:", err);
    } else {
      console.log("Conectado ao SQL Server");
    }
  });

  app.get("/usuarios", (req, res) => {
    const query = "SELECT * FROM usuarios";
    executeQuery(res, query);
  });

  app.post("/usuarios", (req, res) => {
    const { nome, email } = req.body;
    const query = `INSERT INTO usuarios (nome, email) VALUES ('${nome}', '${email}')`;
    executeQuery(res, query);
  });

  app.put("/usuarios/:id", (req, res) => {
    const { nome, email } = req.body;
    const { id } = req.params;
    const query = `UPDATE usuarios SET nome='${nome}', email='${email}' WHERE id=${id}`;
    executeQuery(res, query);
  });

  app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM usuarios WHERE id=${id}`;
    executeQuery(res, query);
  });

  function executeQuery(res, query) {
    sql.query(query, (err, result) => {
      if (err) {
        console.error("Erro na query:", err);
        res.send(err);
      } else {
        console.log("Query executada com sucesso");
        res.send(result);
      }
    });
  }
};
