function calc(n) {
  if (n % 2 === 0) {
    return n / 2;
  } else {
    return n * 2;
  }
};
const result = calc(21);
console.log(result);
