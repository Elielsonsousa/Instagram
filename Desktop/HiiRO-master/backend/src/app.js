const express = require('express');
const cors = require("cors");
const routes = require('./routes');
const multerConfig = require('./App/Middleware/multer');

const app = express();

// version 2.1

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/imagem', express.static(multerConfig.dest));

module.exports = app;