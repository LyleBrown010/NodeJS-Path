var path = require('path');

// basename() - returns the last part of the path
var filename = path.basename('./testdata.txt'); 
console.log(filename)


// delimiter - returns the delimiter specified for the platform (windows is ';')
console.log(path.delimiter);


// dirname() - returns the directories of a path 



// extname() - returns the file extension of a path

// format() - formats a path object into a path string

// isAbsolute() - returns true if a path is an absolute path, otherwise false

// join() - joins the specified paths into one

// normalize() - normalizes the specified path