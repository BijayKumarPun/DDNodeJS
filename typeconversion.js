//difference between == and ===
// == equates to equal in character with type conversion(coercion)
//coercion is forcing to convert
// === equates to strictly equal in type and character with no type conversion

console.log('ram' == 'ram');// true
console.log('ram' === 'ram'); //true
console.log('ram' == 'Ram');//false
console.log('ram' === 'Ram'); // false

console.log('55' == 55); //true; == is of type coercion
console.log('55' === '55'); //true
console.log('55' === 55) ; // false
console.log('ram' == 'ram');

console.log('another part');

console.log('' == false == null == undefined == 0);
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(''==0); //true
console.log(''==false);//true
console.log(0 == undefined);//false
console.log(undefined == 0); //false
console.log(undefined == false); //false


