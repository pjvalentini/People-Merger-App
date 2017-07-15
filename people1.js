const fs = require("fs");
var readFile1;

readFile1 = function(data) {
	fs.readFile("./people1.json", "utf-8", function(err, data) {
		if (err) throw (err);
		console.log(data);
	});
};
readFile1();
