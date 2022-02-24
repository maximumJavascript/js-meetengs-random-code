let str = 'Maxiiiiim';
// 'Maxm'
// let newStr = str + str;

const arr = [1,2,3,4,5];

// arr.splice(0, 1, 10, 10); // 10, 10, 2, 3, 4, 5
//
// arr.shift();
// arr.unshift(10, 10);
//

// push pop shift unshift splice sort
// forEach slice

// forEach map reduce findIndex find
// sort slice push pop

const tens = [10, 10];
const newArr = tens.concat(arr.slice(1)) // 10, 10, 2, 3, 4, 5
console.log(newArr);

const iterable = {
    start: 1,
    end: 10,
    [Symbol.iterator]() {
        return {
            from: this.start,
            to: this.end,
            next() {
                if (this.from <= this.to) {
                    return {
                        done: false,
                        value: this.from++,
                    }
                } else {
                    return {
                        done: true,
                        value: this.to,
                    }
                }
            }
        }
    }
}

// for (const item of iterable) {
//     console.log(item);
// }

function* iterate() {
    let result = 0;

    for (let value = 1; value <= 3; value++) {
        result += yield value;
    }

    return result;
}

const iterableGen = {
    start: 1,
    end: 10,
    [Symbol.iterator]: iterate,
}

// for (const item of iterableGen) {
//     console.log(item);
// }

// const res = iterate();

// let data = 0, prevRes = 0;

// for (let i = 0; ; i++) {
//     const nextResult = res.next(prevRes);

//     if (nextResult.done) {
//         console.log(data);
//         break;
//     }

//     prevRes = nextResult.value;
//     data += prevRes;
// }


let range = {
    from: 1,
    to: 5,
  
    // for await..of вызывает этот метод один раз в самом начале
    [Symbol.asyncIterator]() { // (1)
      // ...возвращает объект-итератор:
      // далее for await..of работает только с этим объектом,
      // запрашивая у него следующие значения вызовом next()
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается на каждой итерации цикла for await..of
        async next() { // (2)
          // должен возвращать значение как объект {done:.., value :...}
          // (автоматически оборачивается в промис с помощью async)
  
          // можно использовать await внутри для асинхронности:
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  (async () => {
  
    for await (let value of range) { // (4)
      console.log(value); // 1,2,3,4,5
    }
  
  })()