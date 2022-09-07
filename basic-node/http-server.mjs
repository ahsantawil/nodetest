import http from 'http';

const server = http.createServer((req, res) => {

    if (req.method === "POST") {
        req.addListener("data", (data) => {
            res.setHeader("Content-Type", "application/json");
            res.write(data);
            res.end();
        })
    } else {
        if (req.url === "/ahsan") {
            res.write("Hello Ahsan");
        } else {
            res.write("Hello HTTP Server")
        }
        res.end();
    }
});


server.listen(3000);