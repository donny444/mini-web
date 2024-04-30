const mysql = require("mysql");
const express = require("express");
const app = express();
const routes = require("./routes.js");
const port = 5000;

app.use(express.static("public"));

// app.use("/", routes);

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "to-do-list"
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("MySQL connected.")
// })

app.post("/task", async (req, res) => {
    // const name = req.body.name;

    res.send(`
        <div class="task">
            <h3 class="task-name">fuck you</h3>
            <button class="delete-task" hx-delete="/delete" hx-target="task">ลบ</button>
        <div>
    `)
})

app.delete("/delete", async (req, res) => {
    res.send(`

    `)
})

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`);
});