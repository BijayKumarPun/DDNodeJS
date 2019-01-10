console.log("using parseInt()");

console.log(parseInt('55'));
console.log(parseFloat('33.4'));

console.log(parseInt('33.4'));
console.log(parseFloat('44'));

//NaN property. aka not a number property
console.log(parseFloat('two'));  //displays NaN
console.log(parseInt('some words')); // displays NaN


console.log(isNaN(parseInt('three'))); //displays true