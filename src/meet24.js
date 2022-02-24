const Объект = {
    test: 'test',
    свойство: this.test,
    метод() {
        return this.test;
    }
}

// console.log(Объект.свойство) // undefined
// console.log(Объект.метод()) // 'test'

const объект1 = Объект;
объект1.test = 'opaopa';

// console.log(объект1.test == Объект.test) // true

const массив = [1,2,3,4,5];
typeof массив // 'object'

const newArr = массив.map(() => {
    return 10;
});

for (let i = 0; i < массив.length; i++) {
    // setTimeout(() => console.log(i));
} // 5 5 5 5 5 (var)
// undefined x 5 (let)
// console.log(i);
// console.log(массив) // [10,10,10,10,10]

// let obj = {
//     [Symbol.iterator]: function() {
//         let current = 0;

//         return {
//             next: function() {
//                 return {
//                     done: current == 10,
//                     value: ++current,
//                 }
//             }
//         }
//     }
// }

// for (let value of obj) {
//     console.log(value);
// }


