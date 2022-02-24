"use strict";

// function test() {
//     const obj = {
//         test: 1,
//         property: this.exampleValue,
//         get testGetter() {
//             return this.test;
//         },
//         method() {
//             return this.property;
//         }
//     }

//     console.log(obj.property);
// }

// const ourObj = {
//     // test: test,
//     test,
//     exampleValue: 1,
// };

// ourObj.test();

// console.log(obj.property); // undefined
// const result = obj.method();  // 

const obj111 = {
    test: 1,
    property: this.test,
    get testGetter() {
        return this.test;
    },
    method() {
        return this.test;
    }
}

// const arr = [1,2,3,4,5];

// const [first, second, ...rest] = arr;
// rest[0] // 3
// rest[1] // 4
// rest[2] // 5
// rest // [3,4,5]

// function zopppa(arg1, arg2, ...rest) {
//     rest[0]; // 'as'

// }

// zopppa(1, 2, 'as', NaN, null, {});


const {test, ...rest} = obj111;
console.log(test, rest); // 1 {}

// obj111.method = undefined;
// obj111?.method?.();
// console.log(obj111.property); // window.test
// console.log(obj111.method()); // 1
// console.log(obj111.testGetter); // 1

// const str = 'zopa';
// const arr = [1,'2',4];
// arr.pop().toFixed();