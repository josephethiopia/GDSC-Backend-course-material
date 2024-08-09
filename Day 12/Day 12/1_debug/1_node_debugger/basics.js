const http = require("http");

http
  .createServer((req, res) => {
    const body = "This is the response";
    debugger; // Start debugging here
    const content_length = body.lengthh; // Intentional typo here
    res.writeHead(200, {
      "Content-type": "text/plain",
      "Content-length": content_length,
    });
    res.end(body);
  })
  .listen(2000, () => console.log("server is running"));
