const ONE_SECOND = 1000;

let counter = 0;
const countUntil = 20

const intervalTimer = setInterval(() => {
  console.log(++counter);
  if (counter === countUntil) {
    clearInterval(intervalTimer);
  }
}, ONE_SECOND);

