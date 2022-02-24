const obj = {
    a: 'test',
    _b: 'zopa',
};

Object.defineProperty(obj, 'b', {
    get() {
        return this._b;
    },
    set(b) {
        this._b = b;
    }
});

obj.b = 'zopa1';
console.log(obj.b) // 'zopa';


const testObj1 = {
    key: 'value',
    key2: 'value2',
}

const testObj3 = {
    key: 'value',
    key2: 'value2',
}

const testObj2 = testObj1;

console.log(testObj1 == testObj2) // true
console.log(testObj1 == testObj3) // false

testObj2.zopa = 1;
console.log(testObj2.zopa); // 1
console.log(testObj1.zopa) // 1
console.log(testObj3.zopa) // undefined