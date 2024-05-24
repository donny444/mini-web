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
                    <div class="task" id="${results.insertedId}">
                        <div>
                            <h3 class="task-name">${name}</h3>
                            <span class="task-date">
                                ${new Date(date).getDate()}/${new Date(date).getMonth()+1}/${new Date(date).getFullYear()}
                            </span><span class="task-time">${time}</span><span class="task-priority-${priority}">P${priority}</span>
                        </div>
                        <svg class="delete-task" hx-delete="/delete" hx-target="closest .task" hx-swap="outerHTML" hx-vals='js:{"id": ${results.insertedId}}'
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"
                        >
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </div>
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
                            <span class="task-date">
                                ${new Date(task.date).getDate()}/${new Date(task.date).getMonth()+1}/${new Date(task.date).getFullYear()}
                            </span><span class="task-time">${task.time}</span><span class="task-priority-${task.priority}">P${task.priority}</span>
                        </div>
                        <svg class="delete-task" hx-delete="/delete" hx-target="closest .task" hx-swap="outerHTML" hx-vals='js:{"id": ${task.id}}'
                            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"
                        >
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
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