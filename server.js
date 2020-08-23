const http = require("http");

http.createServer((req, res) => {
	res.write("Hello Client")
	res.end();
}).listen(4000, () => {
	console.log("Server ready")
})
