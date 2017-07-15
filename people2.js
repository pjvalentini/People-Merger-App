const fs = require("fs");
var readFile2;

readFile2 = function() {
	fs.readFile("./people2.json", "utf-8", function(err, data) {
		if (err) throw (err);
		console.log(data);
	});
};
readFile2();
