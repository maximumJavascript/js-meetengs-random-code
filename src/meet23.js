// console.log(null === undefined) // false
// console.log(NaN == NaN) // false

// console.log(NaN == undefined) // true (false?) 

const obj = {
    toString() {
        return 'test'
    }
}

// console.log(obj == 'test') // true (OK)

// console.log(obj === 'test') // false

// console.log(+0 == -0) // true
// console.log(+0 === -0) // true
// console.log(Object.is(+0, -0)) // false


const objProt = {};
// console.log(objProt.__proto__ == Object); // false
// console.log(objProt.__proto__ == Object.prototype); // true
// console.log(objProt.__proto__ == Object.prototype); // true

const obj1 = {
    canFly: true,
}

const obj3 = {
    isAlive: true,
}

const obj2 = {
    __proto__: obj1,
    canFly: false,
}

// console.log(obj2.zopa) // true

function Bird(isAlive) {
    this.isAlive = isAlive;
}

function GoodBird(isAlive) {
    
}

// Bird.prototype = obj1;

// console.log(new Bird().canFly) // true

console.log(new Bird(true).isAlive) // true
console.log(new Bird(false).isAlive) // false
console.log(new GoodBird(true).isAlive) // true


// --- Event loop ---
function foo() {
    console.log('foo');
}
function bar() {
    setTimeout(foo);
    console.log('bar');
}
function baz() {
    setTimeout(() => console.log('baz'));
}
function liz() {
    requestAnimationFrame(() => console.log('liz'));
}
function rep() {
    Promise.resolve().then(() => console.log('rep'));
}
console.log('start');
foo();
bar();
baz();
liz();
rep();
console.log('end');

// 'start'
// 'foo'
// 'bar' 64
// 'end' 81
// 'foo' 60
// 'baz' 67
// 'rep' 73
// 'liz'


// 'start'
// 'foo'
// 'bar' 64
// 'end' 81
// 'rep' 73
// 'liz'
// 'foo'
// 'baz'

// function test() {
//     return Promise.resolve().then(test);
// }

// test();

// function macro() {
//     return setTimeout(macro);
// }

// macro();