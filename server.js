const http = require("http");
const url = require("url");

http.createServer((req, res) => {

	const { message } = url.parse(req.url, true).query;
	
	if (message) {
		res.write(`This is your message: ${message}`)
	} else {
		res.write("Send me a message by query string")
	}
	res.end();
}).listen(4000, () => {
	console.log("Server ready")
})
