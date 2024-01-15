// Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от
// класса Person.

class Person{
    constructor(age){
        this.age = age;
        this._name = '';
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    sayHi(){
        console.log(`Hi! My name is ${this.name || 'Guest'}. I'm ${this.age} years old.`)
    }
};

class PersonThree extends Person{
    constructor(age, carBrand){
        super(age);
        this.cardBrand = carBrand;
    }

    logCarBrand(){
        console.log(`I'love my ${this.cardBrand}`)
    }
};