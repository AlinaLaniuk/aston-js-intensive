1) Сначала без запуска подцумайте какой будет порядок вывода в консоль
2) Скопируйте и запустите код в любой консоли
3) А дальше прикрипите к дз подробное обьяснение по шагам о работе эвент лупа в этом коде и собственно объяснение почему выведеться именно в таком порядке


```
1 Promise.resolve()
2  .then(() => console.log("a: 1"))
3  .then(() => {
4    setTimeout(() => console.log("timeout 2"));
5    console.log("a: 2");
6  })
7  .then(() => {
8    setTimeout(() => console.log("timeout 3"));
9    console.log("a: 3");  
10  });
11
12 new Promise((res, rej) => {
13 console.log("b");
14  rej(new Error("123"));
15 })
16  .then(console.log("b 1"))
17  .then(
18    () => console.log("b 2"),
19    () => console.log("b")
20  )
21  .catch(() => console.log("b 3"))
22  .then(() => console.log("b 4"));
```

Вывод в консоль - "b" - "b 1" - "a: 1" - "a: 2" - "b" - "a: 3" - "b 4" - "timeout 2" - "timeout 3"

**Шаг 1**

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/5c43fc2b-7e13-4c9e-9a34-8b918061e682)

На этом этапе залогируется "b" на 12 строке как часть синхронного кода (вызов конструтокра промиса и выполнение функции, которая передается в качестве аргумента - синхронные операции), 
а также 'b 1' на 16 строке как часть синхронного кода (здесь просто вызов консоль лога, коллбека нет).

**Шаг 2**

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/20e74798-cef3-4868-aed8-7a019e26ef33)


Здесь залогируются 'a: 1' (функции, разумеется, пройдут через call stack. опускаю это на всех схемах).

**Шаг 3**

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/8f388b9f-9e89-4d02-b096-f6bd0e51448a)



Здесь залогируются 'a: 2' и 'b' в порядке выполнения коллбеков из микротасках.

**Шаг 4**

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/906fe0f2-0915-4dd4-befc-d61d9745d9c2)


Здесь залогируется 'a: 3' и 'b: 4'.

**Шаг 5**

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/d335db29-8133-4189-bad4-828b219afd14)

Здесь залогируются 'timeout 2' и 'timeout 3' в порядке выполнения коллбеков из макротасках.



**Визуальное представление цепочек**

Первая:

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/e161edd8-d5cb-4e2f-a42b-e38327dd04f0)


Вторая:

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/9115acda-9a86-452a-9f7e-a3eaabd2433e)


