// Задание 2 – Скопировать объект всеми возможными способами

// Почти все перечисленные ниже методы не скопируют дескрипторы свойств. Только при использовании Object.create

const obj = {
    prop1: 1,
    prop2: 2,
    prop3: {
        prop4: 4,
        prop5: 5,
        prop6: () => { }
    }
}

// через Object.assign

const copyObjByAssign = {};
Object.assign(copyObjByAssign, obj); // сделает поверхностную копию. 
console.log(obj.prop3 === copyObjByAssign.prop3); // true. Object.assign не создает по новой obj.prop3 в copyObjByAssign.prop3, он лишь копирует ссылку.
Object.defineProperty(obj, 'prop1', { enumerable: false });
const copyObjByAssign2 = {};
Object.assign(copyObjByAssign2, obj); // prop1 не попадет в копию объекта copyObjByAssign2, так как Object.assign копирует только перечисляемые свойства.

const obj1 = {};
const obj2 = { name: 'David' };
const obj3 = { age: 42 };
Object.assign(obj1, obj2, obj3); // так можно склеить несколько объектов.

// через Object.create

const copy = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
console.log(copy); // в отличии от Object.assign в копию попадет и prop1, который ранее был помечен как неперечисляемый. Кроме того, дескрипторы также будут скопированы.

// через structuredClone. Учитывать, что это API браузера. 

const copyObjByStructuredClone = structuredClone(obj); // отдаст ошибку. structuredClone не умеет копировать функции. Как и любые не сериализуемые сущности.

const obj4 = {
    prop1: 1,
    prop2: 2,
    prop3: {
        prop4: 4,
        prop5: 5,
    }
}

const copyObj4ByStructuredClone = structuredClone(obj4); // сделает глубокую копию.
console.log(obj4.prop3 === copyObj4ByStructuredClone.prop3); // false

// через спред оператор

const copyObjBySpread = { ...obj }; // также не глубокая копия. 
console.log(obj.prop3 === copyObjBySpread.prop3); // true

// JSON.stringify() и JSON.parse()

const copyObjViaJSON = JSON.parse(JSON.stringify(obj)); // копия будет глубокой, объект в поле prop3 будет создан новый. Но функцию этот метод не скопирует, поле с функцией просто не будет создано. Копируемые данные должны быть сериализуемы.

// паттерн прототип

class Obj {
    constructor(prop1, prop2, prop3) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
    }

    produce() {
        return new Obj(this.prop1, this.prop2, { ...this.prop3 });
    }
};

const prototypeObj = new Obj(1, 2, { prop1: 1, prop2: () => { } });

const obj5 = prototypeObj.produce();
const obj6 = prototypeObj.produce();
obj6.prop1 = 9;
// проблема остается только с функцией. копируется ссылка. можно сконвертить в строку и передать в new Function или eval, чтобы сделать копию функции, но это небезопасно.

// функция для глубокого копирования

function makeDeepCopy(obj) {
    const copy = {};
    for (let key in obj) {
        if (isObject(obj[key])) {
            copy[key] = makeDeepCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
};

const isObject = (object) => {
    return object != null && typeof object === "object";
};

// универсальной сделать практически невозможно.
// эта функция не учитывает дескрипторы. Не скопирует неперечисляемые. Вообще любые переборы - Object.keys, циклы - неперечисляеыме не перечислятся. Но возможно и нет смысла их копировать
// функция - копируется ссылка. Описано выше.
