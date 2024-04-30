const express = require("express");
const app = express();

app.post("/task", async (req, res) => {
    const name = req.body.name;

    res.send(`
        <div class="task">
            <h3 class="task-name">${name}</h3>
            <button class="delete-task" hx-delete="/delete" hx-target="task">ลบ</button>
        <div>
    `)
})

app.delete("/delete", async (req, res) => {
    res.send(`

    `)
})

module.exports = app;