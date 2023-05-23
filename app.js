const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("This is homepage");
});

app.get("/contact", (req, res) => {
    res.send("This is contact page");
});

app.get("/api/users", (req, res) => {
    res.setHeader("Content-Type", "text/json");
    res.send(
        JSON.stringify([
            {
                id: 3,
                username: "demo_user",
                email: "demo@demo.com",
                phone_number: "+49 123 4567 890"
            },
            {
                id: 2,
                username: "james",
                email: "james@demo.com",
                phone_number: "+49 765 111 999",
            },
        ])
    );
});

app.listen(3000)