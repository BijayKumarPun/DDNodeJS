//create an obj

var myobj = { 
name: 'my name',
age: 40,
class: 44
}

console.log(myobj);


console.log(myobj.age);
console.log(myobj.name);

myobj.name = 'this is another name';
myobj.class = 44;

console.log(myobj);

var attribute = "name";
myobj.attribute = 'another another name';
console.log(myobj);
myobj[attribute] = 'funny';
console.log(myobj);