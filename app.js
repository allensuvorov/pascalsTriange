/**
 * @param {number} numRows
 * @return {number[][]}
 */

let generate = function(numRows) {
    let triangle = [];
    for (let row = 0; row < numRows; row ++) {
        // add empty row
        triangle[row] = []; 
        // set first and last entry to 1
        triangle[row][0] = 1;
        triangle[row][row] = 1;
        // fill in the rest
        for (let j = 1; j < row; j ++) {
            triangle[row][j] = triangle[row-1][j-1] + triangle[row-1][j];
        }
    }
    return triangle;
};

console.log(generate(5));

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]