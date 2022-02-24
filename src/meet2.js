// __proto__ - геттер и сеттер для [[Prototype]]

// const isEatable = {
//     eatable: true,
// }

// Fruits.prototype = isEatable; //! Так лучше не делать! Меняет constructor

function Fruit(options) {
    this.name = options.name;
    this.color = options.color;
}
// Fruit.prototype.RRRR // 

function Apple(options) {
    Fruit.call(this, options);
    this.appleType = options.appleType;
}

Apple.__proto__ = Fruit;

let apple = new Apple({name: 'apple', color: 'yellow', appleType: 'golden'});
console.log(apple.color);

// apple.name
// Fruits.prototype.letsEat // 
// apple.letsJump // 

// let watermelon = new Fruits({ name: 'watermelon', color: 'green' });

// console.log(apple);
// console.log(watermelon);

// console.log(apple.letsEat())
// console.log(watermelon.letsEat());

// console.log(Fruits.constructor === Fruits); // Уже не понимаю, почему нет

// console.log(Fruits.prototype.constructor) // да, он объект. Прототип может быть только объектом или null.
// console.log(apple.constructor === Fruits) // Перезаписали constructor в строке 7