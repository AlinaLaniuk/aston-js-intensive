// Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

const Person = {
    name: 'David',
    age: 30,
    sayHi: function(){
        console.log(`Hi! My name is ${this.name}. I'm ${this.age} years old.`)
    }
};

const Person2 = Object.create(Person);

Person.logInfo = function(){
    console.log(this.name, this.age);
};

Person2.name; // 'David'
Person2.age; // 30
Person2.sayHi(); // Hi! My name is David. I'm 30 years old.
Person2.logInfo(); // 'David', 30
Person.name; // 'David'
Person.age; // 30
Person.sayHi(); // Hi! My name is David. I'm 30 years old.
Person.logInfo(); // 'David', 30


// Person2.__proto__ === Person // true
// Person2 - пустой объект. значения name, age, методы он берет по прототипной цепочке у объекта, на который указывает его __proto__ (скрытое свойство [[Prototype]])
// назначается для Person2 __proto__ через метод Object.create(), который первым аргументом принимает proto.
