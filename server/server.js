const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const PORT = 8000;

/* Добавлены заголовки для решения проблемы CORS с запросом на localhost в Node.js */

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  next();
});

/* --- */

app.use(bodyParser.json());
app.use("/api", routes);

app.use(express.static('public')); //

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
