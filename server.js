require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const { get } = require("./controllers");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("homepage"));
app.get("/login", (req, res) => res.render("login"));
app.get("/signup", (req, res) => res.render("signup"));
app.get("/txter", (req, res) => res.render("txter"));
app.get("/contacts", (req, res) => res.render("contacts"));
app.get("/history", (req, res) => res.render("history"));
app.get("/calendar", (req, res) => res.render("calendar"));
app.use(routes);
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
