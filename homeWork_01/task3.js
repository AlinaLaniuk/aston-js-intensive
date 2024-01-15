// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами

// function declaration 

function makeCounter() {
    let count = 0;
    return () => {
        return count++;
    }
}; // higher-order function

// function expression

const makeCounter1 = function () {
    let count = 0;
    return () => {
        return count++;
    }
}; // higher-order function

// arrow function

const makeCounter2 = () => {
    let count = 0;
    return () => {
        return count++;
    }
}; // higher-order function

// named function expression 

const sayMeow = function sayMeowInner(catName) {
    if (animal) {
        return `Hi! My name is ${catName}. Meow!`
    } else {
        sayMeowInner('Guest cat');
    }
};

// anonymous function

const makeCounter3 = function () {
    let count = 0;
    return () => {
        return count++;
    } // anonymous function
}; // higher-order function

// callback function

function multiplyByTwo(number){
    return number * 2;
}

function makeCounter4(calculateCount) {
    let count = 0;
    return () => {
        return calculateCount ? calculateCount(count++) : count++;
    }
}; // higher-order function

const counter = makeCounter3(multiplyByTwo);

// constructor function

function makeCounter5() {
    this.count = 0;
    this.countFunc = function () {
        return this.count++;
    }
};

const counter1 = new makeCounter5();

// Immediately Invoked Function Expression

const counter2 = (function () {
    let count = 0;
    return () => {
        return count++;
    }
})();

// из разряда зла - создание функций через new Function и eval. 
// может пригодится, если надо сделать функцию из строки. Небезопасно.