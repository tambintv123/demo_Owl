let n = 10;
let sum = 0;
let x = 2;
for (let i = 1; i < n; i++) {
  sum += Math.pow(x, i);
  console.log("sum", sum);
}
