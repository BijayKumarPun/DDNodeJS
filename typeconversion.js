//difference between == and ===
// == equates to equal in character with type conversion(coercion)
// === equates to strictly equal in type and character with no type conversion

console.log('ram' == 'ram');// true
console.log('ram' === 'ram'); //true
console.log('ram' == 'Ram');
console.log('ram' === 'Ram');

console.log('55' == 55); //true; == is of type coercion
console.log('55' === '55'); //true
console.log('55' === 55) ; // false
console.log('ram' == 'ram');