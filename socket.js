const express = require("express");
const server = require("http").createServer();
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
    res.sendFile("index2.html", { root: __dirname })
})

server.on("request", app);
server.listen(PORT, () => { console.log(`server started at port ${PORT}`) });

process.on("SIGINT", () => {
    wss.clients.forEach((client) => {
        client.close();
    })
    server.close(() => {
        shutdownDB();
    })
})

/** Web Sockets */

const webSocketServer = require("ws").Server;

const wss = new webSocketServer({ server })

wss.on("connection", (ws) => {
    const numberOfClients = wss.clients.size;
    console.log(`Client connected: ${numberOfClients}`);

    wss.broadcast(`Current visitors ${numberOfClients}`);

    if (ws.readyState === ws.OPEN) {
        ws.send("Welcome to my server")
    }

    insertVisitor(numberOfClients)

    ws.on("close", () => {
        wss.broadcast(`Current visitors ${numberOfClients}`);
        console.log("A client has diconnected")
    })
})

wss.broadcast = function broadcast(data) {
    wss.clients.forEach((client) => {
        client.send(data)
    })
}


/** Database sqlite 3 */
const sqlite = require("sqlite3");
const db = new sqlite.Database(":memory:");

db.serialize(() => {
    db.run(`
        CREATE TABLE visitors (
            count INTEGER,
            time TEXT
        )
    `)
});

function insertVisitor(numClient) {
    db.run(`INSERT INTO visitors (count, time)
            VALUES (${numClient}, datetime('now'))
    `);
}

function getCounts() {
    db.each("SELECT * FROM visitors", (error, row) => {
        console.log(row)
    })
}

function shutdownDB() {
    getCounts();
    console.log("Shutting down db.");
    db.close();
}
