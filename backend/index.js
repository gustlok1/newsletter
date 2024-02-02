const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", swaggerUi.serve);
app.get("/", swaggerUi.setup(swaggerFile));

require("./endpoints")(app);

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}!`);
});