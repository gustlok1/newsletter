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
};
