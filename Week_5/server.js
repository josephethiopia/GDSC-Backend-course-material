const http = require("http");
const myFirstServer = http.createServer((request, response) => {
  // logic
  if (request.url === "/home") {
    response.end("hello");
  }
});
myFirstServer.listen(4000, () => {
  console.log("server is listening :)", "at port", 4000);
});
