**Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько
структур данных? Какие ?**

Про массивы в js так говорят, сравнивая их поведение с поведением массивов в других языках программирования.
Как правило, массив - это структура заданной и неизменяемой длины. в js длина массивов динамическая.
Кроме того, массив - это объект с особым поведением. фактически это объект с полями-ключами и значениями-элементами массива

На основе массива строят стек, очередь, хеш-таблицу

**Что происходит при добавлении нового элемента в массив?**

https://youtu.be/ijwbVxLMp58?t=797

```
function add(array, item){
  array.push(item);
}
```

Допустим, мы объявили какой-то массив. Из-за особенностей работы массивов в js интерпретатор не знает, какая длина будет у массива. Поэтому он выделяет память под какое-то количество элементов и надеется, что этого хватит.

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/53fcd86e-3ab4-4767-bfe4-1f46fd6d461b)

Начинаем заполнять массив. Представим, что память, до этого выделенная интерпретатором под этот массив, закончилась.

![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/e54d248f-1998-4163-9b21-8f96146fe768)

Но мы хотим добавить еще элемент. В этой ситуации интерпретатор выделит память под еще один массив большей длины и снова будет надеятся, что этого хватит. Предыдущий массив будет скопирован в новый.
![image](https://github.com/AlinaLaniuk/aston-js-intensive/assets/101401177/ca689a3f-ab2c-44ca-a3e1-13a7b2bbab10)


**В худшем случае добавление нового элемента в массив - это линейная сложность, потому что нужно копировать весь массив.**
 Но так бывает очень редко.