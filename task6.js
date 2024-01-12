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
