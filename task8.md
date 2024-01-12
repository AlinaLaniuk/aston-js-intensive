1) Сначала без запуска подцумайте какой будет порядок вывода в консоль
2) Скопируйте и запустите код в любой консоли
3) А дальше прикрипите к дз подробное обьяснение по шагам о работе эвент лупа в этом коде и собственно объяснение почему выведеться именно в таком порядке


```
Promise.resolve()
  .then(() => console.log("a: 1"))
  .then(() => {
    setTimeout(() => console.log("timeout 2"));
    console.log("a: 2");
  })
  .then(() => {
    setTimeout(() => console.log("timeout 3"));
    console.log("a: 3");  
  });

new Promise((res, rej) => {
  console.log("b");
  rej(new Error("123"));
})
  .then(console.log("b 1"))
  .then(
    () => console.log("b 2"),
    () => console.log("b")
  )
  .catch(() => console.log("b 3"))
  .then(() => console.log("b 4"));
```

Вывод в консоль - "b" - "b 1" - "a: 1" - "b 3" - "a: 2" -"b 4" - "a: 3" - "timeout 2" - "timeout 3"

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/30801b84-64ec-4460-8ca6-0430faf661d9)



Вот как выглядит первая цепочка:

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/e161edd8-d5cb-4e2f-a42b-e38327dd04f0)

Вот как вторая:

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/89f861c6-3dd6-4577-86c0-7af33b343778)

