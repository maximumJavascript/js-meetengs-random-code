// const container = document.querySelector('.container');

// container.addEventListener('click', handleClick);

// function handleClick(e) {
//     const target = e.currentTarget;
// }

// {
//     var one = 1;
//     console.log(1);
// }

// function handleClick(e) {
//     var one;
//     const target = e.currentTarget;
// }
// // hoisting
// console.log(one);

const obj = {
    dog: 'Шарик',
    method() {
        return this.test;
    },
    lost() {
        return this.dog;
    }
}

const hehe = {
    test: 'жопа'
}

console.log(obj.lost()); // 

const любая = obj.lost.bind(obj);
console.log(любая()); //

console.log(obj.method.call(hehe))