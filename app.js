const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let USER_DATA = require("./users.json");

app.set("view engine", "ejs");  // setting up template engine to ejs

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    if (req.url.includes("/api")) {
        res.append("Content-Type", "text/json");
    }
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function makeId(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const getUserInfo = (id) => {
    return USER_DATA.filter((obj) => obj._id === id);
};

app.get("/", (req, res) => {
    res.render("index", {
        data: USER_DATA,
    });
});

app.get("/user/:id", (req, res) => {
    res.render("user", {
        data: getUserInfo(req.params.id)[0] || {},
    });
});

app.get("/contact", (req, res) => {
    res.sendFile(`${__dirname}/contact.html`);
});

// RESTFul API Services

// get all users
app.get("/api/users", (req, res) => {
    res.send(USER_DATA);
});

// get single user by id
app.get("/api/user/:id", (req, res) => {
    res.send(getUserInfo(req.params.id));
});

// delete single user by id
app.delete("/api/user/:id", (req, res) => {
    const index = USER_DATA.findIndex((obj) => obj._id === req.params.id);
    res.send(USER_DATA.splice(index, 1));
});

// add new user
app.post("/api/user", (req, res) => {
    const { name, age, email } = req.body;
    if (name && age && email) {
        USER_DATA = [
            ...USER_DATA,
            {
                _id: makeId(24),
                age,
                name,
                email,
            },
        ];
        res.send(USER_DATA);
    } else {
        res.status(500).send("error, user not added.");
    }
});

app.listen(3000);