const number1 = Number([]); // 0
const number2 = Number([1]); // 1
const number3 = Number([1, 2, 3]); // NaN

// это следствие работы Array.prototype.toString. Под капотом этот метод джойнит массив.
// [].join() - это пустая строка, которая конвертится в ноль, 
// [1].join() - получится '1', конвертнется в единицу, 
// [1, 2, 3].join() - строка '1, 2, 3', при приведении к числу получим NaN. Number(NaN) - NaN