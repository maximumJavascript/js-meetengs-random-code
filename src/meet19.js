"use strict";

const объект = {
    from: 1,
    last: 5,
    [Symbol.iterator]: function() {
        return {
            current: this.from,
            last: this.last,
            next: function() {
                const done = this.current > this.last
                    ? true
                    : false;

                const result = {
                    done,
                    value: this.current > 5 ? undefined : this.current++,
                }

                console.log(result, this.current);

                return result;
            }
        }
    }
}

const obj = {
    test: 10,
    cat: 'murzik',
    dog: 'muhtar',
}

const firstFirst = 10;
const arr = [undefined,2,3,4,5];
const [first = firstFirst, second] = arr;

// const [test, cat] = объект;
// console.log(test, cat); // 1 2

// console.log(first, second, arr); // 1 2

for (let val of []) {
    console.log(val); // 1 2 3 4 5
}

let num = 0;
try {
    function test() {
        num++;
        test();
    }

    test(num);
} catch {
    let num = 10;
    test();
    console.log(num);
}

function testTest() {
    "use strict";
    console.log(this);
}

const testTestTest = () => {
    "use strict";
    console.log(this);
}

testTest();
testTestTest();

console.log(this);
