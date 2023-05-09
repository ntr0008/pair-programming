function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}

function filterOddNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 !== 0;
  });
}

let numbers = [2, 4, 7, 11, 15, 16];
let evenNumbers = filterEvenNumbers(numbers);
let oddnumber = filterOddNumbers(numbers);
console.log(evenNumbers);
console.log(oddnumber);

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArray);
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

primeArray = numArray;
console.log(primeArray);

function vowelChecker(x) {
  let firstChar = x.toLowerCase().charAt(0);

  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("The first letter is a vowel");
  } else {
    console.log("not a vowel");
  }
}

vowelChecker("a");

function checkAnagram(str1, str2) {
  let newStr1 = str1
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");
  let newStr2 = str2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

  return newStr1 === newStr2;
}
console.log(checkAnagram("Things are good", "Dogs eat ants"));

function gcdTwoNumbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(gcdTwoNumbers(336, 360));
console.log(gcdTwoNumbers(78, 126));

let car = {
  make: "Nissan",
  model: "GTR",
  color: "Grey",
  mileage: 3000,
  isWorking: true,

  driveToWork: () => {
    console.log(`Old Mileage ${car.mileage}`);
    console.log(car.mileage);
    car.mileage = car.mileage + 33;
    console.log(`New Mileage ${car.mileage}`);
  },

  driveAroundTheWorld: () => {
    console.log(`Old Mileage ${car.mileage}`);
    car.mileage = car.mileage + 24000;
    console.log(`New Mileage ${car.mileage}`);
    console.log("The car needs a tune-up!");
    isWorking = false;
  },

  runErrands: () => {
    console.log(`Old Mileage ${car.mileage}`);
    car.mileage = car.mileage + 30;
    console.log(`New Mileage ${car.mileage}`);
    console.log("The car needs a tune-up!");
    isWorking = false;
  },
};

car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();

const balancedbrackets = (str) => {
  const stack = [];
  let openers = ["{", "[", "("];
  let closers = ["}", "]", ")"];

  const dict = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (openers.includes(char)) {
      stack.push(char);
    } else if (closers.includes(char)) {
      //is our stack empty?

      if (!stack.length) {
        return false;
      }
      //does our popped element not match the corresponding element?
      else if (dict[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(balancedbrackets("{Hello world}"));
console.log(balancedbrackets("{Hello world]"));
