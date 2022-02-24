// alert('жопа');


const state = {
    name: 'Vasya',
    test: 1,
};

const proxy = new Proxy(state, {
    get(target, p, receiver) {
        if (p == 'name') return 'Petya';
        return Reflect.get(...arguments);
    },
    set() {

    }
});

// state.name = 'Petya';

console.log(proxy.name); // 'Petya';
console.log(proxy.test); // 1


const arr = [1,2,3,4,5];

const fn = (arg1,arg2,arg3,arg4,arg5) => {

};

fn(1,2,3);

arr.reduce((acc, x, idx, arr) => {

}, 0);

Array.prototype.myForEach = function () {

}

// const str = 'string hehmda';
// Array.from(str);
// str.split('');

// arr.push().toFixed();

// push pop shift unshift splice
// forEach map reduce slice

// forEach map reduce find findIndex indexOf lastIndexOf
// slice sort push pop

// Реализовать методы forEach, map, reduce