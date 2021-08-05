const http = require("http");
const fs = require("fs");
const { dirname } = require("path");
http.createServer(function (req, res) {
res.writeHead(200, {
"Content-Type": "text-html"
});
const path =__dirname+'/../';
fs.readdir(path, function (err, files) {
res.write(`${files}`);
res.end();
});
}).listen(5000);
