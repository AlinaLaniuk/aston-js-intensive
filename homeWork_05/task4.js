// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total :
// 2) Какая сложность у вашего алгоритма ?


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    let firstNumber = 0;
    let secondNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        firstNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            secondNumber = arr[j]
            if (firstNumber + secondNumber === total) {
                return [firstNumber, secondNumber];
            }
        }
    }

    return 'Incorrect data';
};

// по памяти - константная O(5), по времени - квадратичная O(N2)


// если в массиве нет повторов
const firstSum2 = (arr, total) => {
    const set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        const rest = total - arr[i];
        if (set.has(total - arr[i]) && resr !== arr[i]) {
            return [arr[i], total - arr[i]];
        }
    }
    return 'Incorrect data';
};

// по памяти - константная O(4), по времени - квадратичная O(N2) (set.has - это возможно цикл, по крайней мере в спеке. может реализация конкретного рантайма предполагает другой механизм. читала, что может быть реализвано через хэш-таблицы. в таком случае сложность будет линейной)
