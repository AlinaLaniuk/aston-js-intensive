// Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value
// (Привязать через bind, call, apply)

function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };

const bindLogger = logger.bind(obj);
bindLogger();

logger.call(obj);
logger.apply(obj);
