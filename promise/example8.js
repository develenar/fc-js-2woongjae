/*
p 라는 프로미스 객체는 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/

const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfilled */
    }, 1000);
});

p.then(/* callback */)
