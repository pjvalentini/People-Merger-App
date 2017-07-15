const fs = require("fs");

const people1 = require("./people1.js");
const people2 = require("./people2.js");

const mergeJSON = require("merge-json");

// Cant seem to save this package to my dependencies...after many down loads.
// var jsonConcat = require("json-concat");

fs.writeFile("./peopleComplete.txt", "Hello!", (err) => {
	if (err) throw (err);
	// var result = mergeJSON.merge(people1, people2);
	console.log("hello");
});

// Could not get tgis code to work since I could not download the package.
// jsonConcat({
// 	src: ["/.people1.json", "people2.json"],
// 	dest: "./poepleComplete.json",
// 	}, function (json) {
// 	console.log(json);
// });
//
// jsonConcat();
