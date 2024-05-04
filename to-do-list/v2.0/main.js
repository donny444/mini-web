const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connection = require("./database.js");
const routes = require("./routes.js");
const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/public", express.static("public"));

app.use("/", routes);

connection.connect(function(err) {
    if (err) throw err;
    console.log("MySQL connected.")
})

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`);
});