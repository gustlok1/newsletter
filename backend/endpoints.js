const mysql = require("mysql");
const cors = require("cors");
module.exports = function (app) {
  app.use(cors());
  const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "newsletter",
  });

  app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
      if (err) {
        res.json("Erro");
      } else {
        res.json(result);
      }
    });
  });
  app.post("/users", (req, res) => {
    const { nome, email } = req.body;
    db.query(
      "INSERT INTO users VALUES(default, ?, ?)",
      [nome, email],
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json("User criado!");
        }
      }
    );
  });

  app.delete("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    db.query(
      "DELETE FROM users WHERE id = ?",
      [userId],
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json("User deletado!");
        }
      }
    );
  });
  app.put("/users/:user", (req, res) => {
    const userId = req.params.user;
    const { nome, email } = req.body;
    db.query(
      "UPDATE users SET nome = ?, email = ? WHERE id = ?",
      [nome, email, userId],
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json("User alterado");
        }
      }
    );
  });
};
