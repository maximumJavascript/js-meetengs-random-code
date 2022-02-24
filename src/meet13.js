"use strict";

// let a = 'test';
// const b = 'onlyValue';
// const obj = {
//     test: 'prop',
// }

// let b1 = 0 || 1; // 1
// let c1 = 3 && 3 && 0 && 4; // 0 null '' -1

// console.log(Boolean(-1)) // true;
// console.log(Boolean(0)) // false;

// 1 == '1' // true
// 1 > '1' // 1 > 1 // false
// 2 >= '1' //

// undefined == null // true
// 0 == null; // false 
// 0 > null; // false 0 > 0 false
// 0 >= null; // 0 >= 0 // true

// ((null ?? 1) ?? 2) ?? 3; // 1


function User(age, name) {
    this.age = age + 1;
    this.name = name;
}

const userInstance = new User(22, 'Vasya');
const userObject = {
    age: 22,
    name: 'Vasya'
};

const userInstance2 = new User(23, 'Vasya');

const symb = Symbol('mySymbol');

const userObject2 = {
    age: 23,
    name: 'Vasya',
    __test: 2,
};

const mySymb = Symbol('test');
userObject2[mySymb] = 4;
console.log(userObject2[mySymb]);

const obj111 = {
    toString() {
        return 222;
    },
    valueOf() {

    },
    [Symbol.toPrimitive](hint) {
        return '1';
    }
};

// console.log(obj111 + '23');

class MyClass {
    // constructor() {
    //     this.#test();
    // }

    static staticMethod1() {
        console.log('static');
    }

    static staticMethod() {
        // console.log('static');
        this._myMethod();
        return 20;
    }

    #test() {
        console.log(1);
    }

    _myMethod() {
        console.log(10);
    }
}

// console.log(MyClass.prototype.test);
// console.log(new MyClass().myMethod, new MyClass().test); // fn 'test'; 
console.log(MyClass.staticMethod.call(new MyClass()));
// console.log(new MyClass().staticMethod());

console.log(new MyClass() instanceof MyClass)

