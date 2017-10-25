"use strict";

// requiring fs
const fs = require("fs");

// Set up global variables
const fileOne = require("./people1.json");
const fileTwo = require("./people2.json");
const completeFile = 'peopleComplete.txt';

// this function has two fs.readFiles with cb functions.
// that reads fileOne, fileTwo, and holds two local variables
// that parses the JSON files.
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

// this fs.writeFile takes in the file_to_write_to...a merge.sort() arg,
// the text type, and callback function.
			fs.writeFile('./peopleComplete.txt', merge.sort(), "utf-8", function(err) {
				if (err) throw err;
			});
		});
	});
}
// Finally calling the function that takes the 2 JSON files task in and
// reads, parses, merges, and sorts all in one function...
parseReadMergeSort("./people1.json", "./people2.json");
