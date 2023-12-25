function FirstFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
}

const num = 8;
const result = FirstFactorial(num);
console.log(result);
