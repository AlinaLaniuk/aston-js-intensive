// Прочитать про Top Level Await (можно ли использовать await вне функции async)

// await можно испоользовать вне функции, помеченной как async, если мы экспортируем какую-то сущность, которую надо "дождаться", как модуль. Пока этот модуль, обозначенный словом await не отдаст данные (например, что-то фетчится), выполнение кода дальше не пойдет.