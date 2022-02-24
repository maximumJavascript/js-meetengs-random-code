// function test() {
//     var opa = 'test';
// }

{
    let a = 10;
    var testtest = 10;
}

// console.log(a); // undefined
// console.log(testtest); // undefined

typeof null // 'object'
typeof undefined // 'undefined'

// 'test' && '' && 3 // 0 
1 > 2 // false

NaN == NaN // false
null == undefined // true
null == 0 // false
null == null // true
Number(null) == 0 // 

for (let a = 0; a < 10; a++) {}
for (let a in {}) {}
for (let a of []) {}

let obj = {
    жопа: 'жопа',
    hmmm: this.жопа,
    выведиЖопу: () => {
        console.log(this.жопа);
    },
    выведиЖопу2() {
        console.log(this.жопа);
    },
    собака: {},
};

// obj.выведиЖопу() // undefined
// obj.выведиЖопу2() // жопа
// obj.собака.гав?.() // 

// ([]).push();
// ([]).pop();


