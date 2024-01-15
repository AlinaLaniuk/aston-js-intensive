// Задание 1 – Создать объект counter всеми возможными способами

// литеральный

const counter = {};

// через new Object

const counter1 = new Object(); // получим инстанс конструктора Object. counter1.__proto__ === Symbol.prototype
const counter2 = new Object(1); // получим инстанс конструктора Number. counter2.__proto__ === Number.prototype
const counter3 = new Object('1'); // получим инстанс конструктора String. counter3.__proto__ === String.prototype
const counter4 = new Object(true); // получим инстанс конструктора Boolean. counter4.__proto__ === Boolean.prototype
const counter5 = new Object(1n); // получим инстанс конструктора Bigint. counter5.__proto__ === Bigint.prototype
const counter6 = new Object(Symbol(1)); // получим объектное представление Symbol. counter9.__proto__ === Symbol.prototype
const counter7 = new Object(null); // получим инстанс конструктора Object. counter6.__proto__ === Object.prototype
const counter8 = new Object(undefined); // получим инстанс конструктора Object. counter7.__proto__ === Object.prototype
const counter9 = new Object(() => {}); // получим инстанс конструктора Function. counter8.__proto__ === Function.prototype
const counter10 = new Object(new Map()); // получим инстанс конструктора Map. counter10.__proto__ === Map.prototype
// при передаче в качестве значения в new Object инстанса любого встроенного конструктора получим этот же инстанс.


// через Object.create

const counter11 = Object.create(null, {
    prop1: {
        value: 5,
        writable: false,
        enumerable: true,
        configurable: true
    },
    prop2: {
        get: function(){return this.prop1},
        enumerable: true,
        configurable: true
    },
});

// дескрипторы - https://github.com/AlinaLaniuk/interview/blob/main/js/objects.md