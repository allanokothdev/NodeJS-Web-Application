const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
    let readStream;
    const url = request.url;

    console.log(`Request made: ${request.url}`);
    response.writeHead(200, { "Content-Type": "text/html" });
    if (url === "/contact") {
        readStream = fs.createReadStream(`${__dirname}/contact.html`, "utf8");
    } else {
        readStream = fs.createReadStream(`${__dirname}/index.html`, "utf8");
    }
    readStream.pipe(response);
});

app.get("/", (req, res) => {
    res.send("This is homepage");
});

app.get("/contact", (req, res) => {
    res.send("This is contact page");
});

server.listen(3000, "127.0.0.1", () =>
    console.log("Server is started on http://127.0.0.1:3000")
);