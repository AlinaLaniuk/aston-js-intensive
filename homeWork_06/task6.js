// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого
// элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

const delay = 3000;

function logNumbers(array){
    let currentIndex = 0;
    const timeoutID = setInterval(() => {
        console.log(currentIndex);
        currentIndex += 1;
        if(currentIndex === array.length){
            clearInterval(timeoutID);
        }
    }, delay);
};

function logNumbers1(array){
    array.forEach((number, index) => {
        setTimeout(() => {
            console.log(index);
        }, delay * index)
    })
};

// я сама в ужасе, что написала это, и по-моему выглядит чудовищно. но по мотивам недавнего знакомства с итераторами решила попробовать. пока не глубоко понимаю, как это работает, сделала из интереса
// безусловно, для этой задачи это избыточно. но хочу для себя отметить, что написание здесь итератора связывает работу с данными.
// когда я в итерации напихиваю в макротаски коллбеки, у меня вызовы этих коллбеков по сути никак не связаны. 
// асинкитератор по сути создает промисовую цепочку. и вроде все тоже самое с таймаутами, но у меня есть гарантия, что следующий коллбек от сеттаймаута не будет взят в работу, пока не выполнится предыдущий.


Array.prototype[Symbol.asyncIterator] = function() {
    const arrayLength = this.length;
    return {
      i: 0,
      next() {
        if (this.i < arrayLength) {
          return new Promise((resolve, reject) => {setTimeout(() => {resolve({value: this.i++, done: false})}, 3000)});
        }

        return Promise.resolve({ done: true });
      },
    };
};

async function logNumbers3(array){
  for await (let index of array) {
    console.log(index);
  }
}
