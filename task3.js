let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});
promiseTwo
    .then((res) => {
        return res + "b"; // сюда 'a' приходит как результат резолва промиса
    })
    .then((res) => {
        return res + "с"; // предыдущий промис от then резолвнулся, поэтому попадаем сюда. сюда передан 'ab' от предыдущего промиса
    })
    .finally((res) => {
        return res + "!!!!!!!"; // это блок кода исполнится в любом случае, как и положено finnally. но на результат логирования в последнем then он не окажет влияния, так как finally не принимает никакого значения в коллбеке. так происходит потому, что finally не может знать, он разрешится с положительным или отрицательным результатом
    }) // выглядит немного смущабельно, что finally стоит посередине цепочки. но в целом он исполнится в порядке, в котором выстроена цепочка. к нему можно присобачить прототипный метод промиса, ведь finally, как и все промисовое, отдаст промис
    .catch((res) => {
        return res + "d"; // ошибок нет, поэтому этот блок не исполнится
    })
    .then((res) => {
        console.log(res); // 'abc'
    });

// результат выполнения - 'abc'

