/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops (depth, width = depth) {
  let result = "\n";

  for (i = 0; i < depth; i++) {
    for (j = 0; j < width; j++) {
      result = result + '{x:' + j + ', y:' + i + '}, ';
    }
    result = result.substring(0, result.length - 2);
    result = result + '\n';
  }
  return result;
};

// To see your console output outside the tests add function calls here.
console.log(nestedForLoops(3));


// expected '\n{x:0, y:0}, {x:1, y:0}, {x:2, y:0}, \n{x:0, y:1}, {x:1, y:1}, {x:2, y:1}, \n{x:0, y:2}, {x:1, y:2}, {x:2, y:2}, \n' 
// to equal '\n{x:0, y:0}, {x:1, y:0}, {x:2, y:0}\n{x:0, y:1}, {x:1, y:1}, {x:2, y:1}\n{x:0, y:2}, {x:1, y:2}, {x:2, y:2}\n'


