const express = require("express");
const bodyParser = require("body-parser");
const objectid = require("objectid");

const app = express();

let USER_DATA = require("./users.json");

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    res.append("Content-Type", "text/json");
    next();
});

//  Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  Get all users
app.get("/api/users", (req, res) => {
    res.send(USER_DATA);
});

//  Get single user by id
app.get("/api/user/:id", (req, res) => {
    res.send(USER_DATA.filter((obj) => obj._id === req.params.id));
});


//  Delete single user by id
app.delete("/api/user/:id", (req, res) => {
    const index = USER_DATA.findIndex((obj) => obj._id === req.params.id);
    res.send(USER_DATA.splice(index, 1));
});


//  Add new user
app.post("/api/user", (req, res) => {
    const { name, age, email } = req.body;
    if (name && age && email) {
        USER_DATA = [
            ...USER_DATA,
            {
                _id: objectid(),
                age,
                name,
                email,
            },
        ];
        res.send(USER_DATA);
    } else {
        res.status(500).send("error, user not added.")
    }
});

app.listen(3000);