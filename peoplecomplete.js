"use strict";

const fs = require("fs");

const fileOne = require("./people1.json");
const fileTwo = require("./people2.json");
const completeFile = 'peopleComplete.txt';


function parseReadMergeSort(fileOne, fileTwo) {
	fs.readFile(fileOne, 'utf-8', function(err, data1) {
		if (err) throw err;
  	// Turns the string into javascript
		var firstFile = JSON.parse(data1);

		fs.readFile(fileTwo, 'utf-8', function(err, data2) {
  		if (err) throw err;
  		var secondFile = JSON.parse(data2);
  		var merge = firstFile.concat(secondFile);
    	// Alphabetically sorts the items in the array.
  		console.log(merge.sort());

			fs.writeFile('./peopleComplete.txt', merge.sort(), "utf-8", function(err) {
				if (err) throw err;
			});
		});
	});
}
parseReadMergeSort("./people1.json", "./people2.json");
