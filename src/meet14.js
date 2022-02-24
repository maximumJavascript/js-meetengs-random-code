'sd'.toUpperCase();
11.55555.toFixed(2); // '11.56'


// array.push(1);
// array.pop();
// forEach, map, reduce

const array = [1,2,3,4,5];

const result1 = array.forEach(() => 1); // undefined
const result2 = array.map((x, idx, arr) => {
    return 1;
}); // [1,2]
const result3 = array.reduce((acc, item, idx, arr) => {
    return acc + item;
}, 0); // 

const obj = {
    key: 1,
    one: 2,
    methodTest() {
        return 20;
    },
    valueOf() {
        return 50;
    },
    toString() {
        return '550';
    },
    [Symbol.toPrimitive](hint) {
        if (hint == 'number') {
            return 4;
        } else if (hint == 'string') {
            return '4';
        } else if (hint == 'default') {
            return '10';
        }
    }
}

const primitive0 = obj.methodTest('zopa');
const primitive1 = obj[Symbol.toPrimitive]('zopa');
const primitive2 = obj + 4; // '104'

Object.entries(obj); // [['key', 1], ['one', 2]]

const obj11 = obj10;
console.log(obj11.key1) // expect: 1


const obj10 = {
    key1: 1,
    one: 2,
    objNested: {
        opa: 'opa',
    }
}

const obj12 = {};

for (let key in obj10) {
    obj12[key] = obj10[key];
}

console.log(obj12.objNested === obj10.objNested) // true




function consumer(callback) {
    return new Promise((res, rej) => {
        const result = callback();
        if (result.isError) rej();
        else res();
    })
}

const cb = (one) => {
    console.log(one + 1);
};

consumer(cb).then(x => {
    
})

















