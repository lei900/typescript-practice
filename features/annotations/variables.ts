// Function
const logNumber = (i: number): void => {
  console.log(i);
};

// or
const loggNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the "any" type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // TS can't tell type returned by JSON.parse()
console.log(coordinates); // {x: 10, y: 10}

// How JSON.parse() works
// return the type of the value
JSON.parse("false"); // false
JSON.parse("4"); // 4
JSON.parse('{"x":10, "y":20}'); // {x: 10, y: 20}
JSON.parse('{"x":10, "y":"alex", "z": false}'); // {x: 10, y: 'alex', z: false}

// 2) When we declare a variable on one line then initialize it later;
let words = ["red", "green", "blue"];
let foundWord: boolean; // or let foundWord: false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number | number[] = false;
