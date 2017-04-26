a = 10;
10
a = "Hello"
"Hello"
a = 10.5
10.5
typeof(a);
"number"
a = "Hello"
"Hello"
typeof(a)
"string"
a = "10"
"10"
b = 10
10
a+b;
"1010"
c = 10
10
c+a+b;
"101010"
c+b+a;
"2010"
a == b;
true
a === b
false
function display(){
console.log("My JS Example");
}
undefined
display()
VM160:2 My JS Example
undefined
a = "10"
"10"
b = "10"
"10"
a+b;
"1010"
parseInt(a) + parseInt(b)
20
a = [1,2,3,4,5,6]
[1, 2, 3, 4, 5, 6]0: 11: 22: 33: 44: 55: 6length: 6__proto__: Array(0)concat: function concat()constructor: function Array()copyWithin: function copyWithin()entries: function entries()every: function every()fill: function fill()filter: function filter()find: function find()findIndex: function findIndex()forEach: function forEach()includes: function includes()indexOf: function indexOf()join: function join()keys: function keys()lastIndexOf: function lastIndexOf()length: 0map: function map()pop: function pop()push: function push()reduce: function reduce()reduceRight: function reduceRight()reverse: function reverse()shift: function shift()slice: function slice()some: function some()sort: function sort()splice: function splice()toLocaleString: function toLocaleString()toString: function toString()unshift: function unshift()Symbol(Symbol.iterator): function values()Symbol(Symbol.unscopables): Object__proto__: Object
a;
[1, 2, 3, 4, 5, 6]
typeof(a)
"object"
a instanceof Array;
true
var obj = {
'id' : 1001,
'name' : 'Ram'
}
undefined
obj;
Object {id: 1001, name: "Ram"}id: 1001name: "Ram"__proto__: Objectconstructor: function Object()hasOwnProperty: function hasOwnProperty()isPrototypeOf: function isPrototypeOf()propertyIsEnumerable: function propertyIsEnumerable()toLocaleString: function toLocaleString()toString: function toString()valueOf: function valueOf()__defineGetter__: function __defineGetter__()__defineSetter__: function __defineSetter__()__lookupGetter__: function __lookupGetter__()__lookupSetter__: function __lookupSetter__()get __proto__: function __proto__()set __proto__: function __proto__()
obj instanceof Object;
true
obj.name;
"Ram"
obj.salary = 12000;
12000
obj;
Object {id: 1001, name: "Ram", salary: 12000}id: 1001name: "Ram"salary: 12000__proto__: Object
function Emp(id,name,salary){
this.id = id;
this.name = name;
this.salary = salary
}
undefined
var ram = new Emp(1002,'Ram',15000)
undefined
ram;
Emp {id: 1002, name: "Ram", salary: 15000}id: 1002name: "Ram"salary: 15000__proto__: Objectconstructor: function Emp(id,name,salary)arguments: nullcaller: nulllength: 3name: "Emp"prototype: Object__proto__: function ()[[FunctionLocation]]: VM462:1[[Scopes]]: Scopes[1]__proto__: Object
typeof(ram);
"object"
ram instanceof Emp;
true