// "use strict";

const объект = {
    testTest: 'test',
    полноеИмя: this.свойство,
    get получитьСвойство() {
        return this.свойство;
    }
}

// объект.свойство = 10;
// console.log(объект.свойство); // 'test'

// объект.получитьСвойство = 10;
// console.log(объект.получитьСвойство); // 'test'

// console.log(объект.полноеИмя);
// console.log(объект.получитьСвойство);

Object.defineProperty(объект, 'name', {
    // value: 'значение',
    // writable: true,
    configurable: true,
    enumerable: true,
    get() {
        return this.testTest.toUpperCase();
    }
});

// console.log(объект.name); // undefined

// объект.name = 'значение';
console.log(объект.name); // 'TEST'

объект.testTest = 'zopa';
console.log(объект.name); // 'ZOPA'

// for (let key in объект) {
//     console.log(key);
// }



// ------

// First example of closure
// var foo = "maxim";
// var fn = function() {
//     bruh;

//     let bruh = function() {
//         console.log(foo); // 'maxim' undefined
//     }
// }

// fn();

// Second example of closure
// let variable = 1000;

// const fn = function maximJS(parametr) {
//     console.log((parametr -= 7)); // 993 993

//     return function () {
//         maximJS(variable); // 1000
//         variable -= 7; // 993
//     };
// };

// fn(variable)();
// console.log(variable); // 993