function getStatus(num) {
  if (typeof num != "number") return num;
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";

  return num;
}

for (let cont = 0; cont <= 100; cont++) {
  console.log(getStatus(cont));
}
