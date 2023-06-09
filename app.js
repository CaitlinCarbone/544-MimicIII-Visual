const express = require("express");
const { engine } = require("express-handlebars");
var cors = require("cors");
var cookieParser = require("cookie-parser");
const app = express();
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
// app.set("views", "./static/views");
const configRoutes = require("./routes/index.js");

// Server-wide middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'))

// app.use(express.static("static"));

// Our implemented routes
configRoutes(app);

// Bootstrap the application
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Website accessible at http://localhost:${port}/home`);
});
