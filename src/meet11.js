"use strict";

// let condition = Math.random() > 0.5;

// let func = condition
//     ? function test() { console.log(1) }
//     : function test2() { console.log(2) }

// let arrowFn = () => console.log(3);


// func();

// func();
// ...
// const str = prompt('введите ключ объекта');
const str = 'test';

let obj = {
    apple: true,
    [str]: 'test',
    str: 'zopa',
    anotherObj: {
        nestedProp: 1,
    }
}

let nestedObj = obj[str];
obj = null;

function test111() {
    try {
        const prop = 'test';
        const obj = undefined;

        if (prop) return 2;
        else throw new MyError('aboba ping');

    } catch (e) {
        if (e instanceof MyError) {
            console.log('aboba pong');
        } else if (e instanceof TypeError) {
            console.log('type error')
        } else {
            console.log('error occured');
        }
        // console.error(e);
    } finally {
        try {
            return 3;
        } finally {
            return 4;
        }
    }
}

const result = test111();
console.log(result);

class MyError extends Error {
    static zopa() {
        console.log('Dormidont');
    }

    constructor(...args) {
        super(...args);
        this.age = 22;

        const result = this.test.bind(this);
    }

    test() {
        return this.age;
    }
}

MyError.walk = function walk() {
    console.log('go go go');
}

MyError.zopa();
MyError.walk();

const instance = new MyError('test');
let fun111 = instance.test;
console.log(fun111())

console.log(new MyError('test'));