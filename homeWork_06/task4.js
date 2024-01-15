function doSmth() {
    return Promise.resolve("123");
};
doSmth()
    .then(function (a) {
        console.log("1", a); // залогируется "1", "123"
        return a;
    })
    .then(function (b) {
        console.log("2", b); // залогируется "2", "123"

        return Promise.reject("321");
    })
    .catch(function (err) {
        console.log("3", err); // залогируется "3", "321". в этот блок попадем из-за возвращенного предыдущим промисом реджекнутого промиса
    })
    .then(function (c) {
        console.log("4", c); // залогируется "4", undefined. передача значения оборвалась на catch
        return c;
    });