const connection = require("./database.js");
const express = require("express");
const app = express();

app.post("/add", async (req, res) => {
    const name = req.body.name;
    const date = req.body.date;
    const time = req.body.time;
    const priority = req.body.priority;

    try {
        connection.query('INSERT INTO tasks (name, date, time, priority) VALUES (?, ?, ?, ?)', [name, date, time, priority], async (error, results) => {
            if(error) {
                res.send(`<p>Internal Server Error</p>`);
            } else {
                res.send(`
                    <div class="task" id="${results.insertId}">
                        <div>
                            <h3 class="task-name">${name}</h3>
                            <span class="task-date">${date}</span><span class="task-time">${time}</span><span class="task-priority">P${priority}</span>
                        </div>
                        <button class="delete-task" hx-delete="/delete" hx-target="closest .task" hx-swap="outerHTML" hx-vals='js:{"id": ${results.insertId}}'>ลบ</button>
                    <div>
                `)
            }
        });
    } catch(err) {
        console.error(err);
    }
})

app.delete("/delete", async (req, res) => {
    const id = req.body.id;

    try {
        connection.query('DELETE FROM tasks WHERE id=?', [id], async (error, results) => {
            if(error) {
                console.log("Deleting Error");
            } else {
                res.send(`

                `)
            }
        })
    } catch(err) {

    }
})

app.get("/tasks", async (req, res) => {
    try {
        connection.query('SELECT * FROM tasks ORDER BY priority ASC', async (error, results) => {
            if(error) {
                res.send(`<p>Internal Server Error</p>`);
            } else {
                var resultsHtml = results.map((task) => `
                    <div class="task" id="${task.id}">
                        <div>
                            <h3 class="task-name">${task.name}</h3>
                            <span class="task-date">${task.date}</span><span class="task-time">${task.time}</span><span class="task-priority">P${task.priority}</span>
                        </div>
                        <button class="delete-task" hx-delete="/delete" hx-target="closest .task" hx-swap="outerHTML" hx-vals='js:{"id": ${task.id}}'>ลบ</button>
                    </div>
                `).join("");

                res.send(resultsHtml);
            }
        })
    } catch(err) {
        console.error(err);
    }
})

module.exports = app;