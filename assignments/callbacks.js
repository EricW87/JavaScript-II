// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item))
	return cb(true, item);

  return cb(false, item);
}

//Test 1 getLength
const double_length = getLength(items, (l) => 2 * l);
console.log(double_length);

//Test 2 last
console.log(last(items, (end) => `The last item on the list is ${end}`));

//Test 3 sumNums
const number1 = 5, number2 = 8;

function printSumNums(s) {
	return `${number1} + ${number2} = ${s}`;
}

sum = sumNums(number1, number2, printSumNums); 
console.log(sum);

//Test 4 multiplyNums
function printMultiplyNums(m) { 
	return `${number1} * ${number2} = ${m}`;
}
product = multiplyNums(number1, number2, printMultiplyNums);
console.log(product);

//Test 5 contains

function containMessage(hasItem, item) {
	if(hasItem)
		return `The list contains the ${item}`;
	else
		return `The list does not contain ${item}`;
}


console.log(contains('Notebook', items, containMessage));
console.log(contains('Cheese', items, containMessage));
  
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
