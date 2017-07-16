"use strict";

const fs = require("fs");

const file1 = require("./people1.json");
const file2 = require("./people2.json");
const completeFile = 'peopleComplete.txt';

function parseReadMergeSort() {
	fs.readFile("./people1.json", 'utf-8', function(err, data1) {
		if (err) throw err;
  	// Turns the string into javascript
		var firstFile = JSON.parse(data1);

		fs.readFile("./people2.json", 'utf-8', function(err, data2) {
  		if (err) throw err;
  		var secondFile = JSON.parse(data2);
  		var total = firstFile.concat(secondFile);
    	// Alphabetically sorts the items in the array, it's automagic!
  		console.log(total.sort());
		});
	});
}
parseReadMergeSort();
