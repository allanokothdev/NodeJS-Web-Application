const http = require("http")

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/JSON" });
    response.end(JSON.stringify({ name: "John", employee_id: "DS123" }))
});

server.listen(3000, "127.0.0.1", () =>
    console.log("Server is started on http://127.0.0.1:3000")
);