// Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

Function.prototype.customBind = function(newThis, ...bindArgs){
    return (...args) => {
        return this.call(newThis, ...bindArgs, ...args)
    }
};

function logger(...args) {
    console.log(`Hi! My this x is ${this.x} and args are ${[...args]}`);
};

const obj = {x: 10}

const customBindLogger = logger.customBind(obj, 1, 2, 3);
