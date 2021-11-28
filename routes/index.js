const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;
