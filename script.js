//JavaScript for Kids

// Programming challenge 2

// All animals with awesome before
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
let awesomeanimals = [];
for (let rep = 0; rep < animals.length; rep++) {
  awesomeanimals.push("Awesome " + animals[rep]);
}
console.log(awesomeanimals);

// Random letter generator
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
const luckyLetterText = `Dein Glücksbuchstabe is ${randomLetter}`;
console.log(luckyLetterText);

// H4CK3R SP34K

// 1
/*let input = "javascript is awesome"; // j4v4scr1pt 1s 4w3s0m3
let output = "";
for (let rep = 0; rep < input.length; rep++) {
  const currentLetter = changeLetter(input[rep]);
  output = output + currentLetter;
}
console.log("output", output);
function changeLetter(letter) {
  if (letter === "a") return "4";
  if (letter === "e") return "3";
  if (letter === "o") return "0";
  return letter;
}*/

// 2
let input = "javascript is super awesome"; // j4v4scr1pt 1s 4w3s0m3
let output = "";
for (let rep = 0; rep < input.length; rep++) {
  let currentLetter = input[rep];

  currentLetter === "a" ? (currentLetter = "4") : "";
  currentLetter === "i" ? (currentLetter = "1") : "";
  currentLetter === "o" ? (currentLetter = "0") : "";
  currentLetter === "j" ? (currentLetter = currentLetter.toLowerCase()) : "";
  currentLetter === "s"
    ? (currentLetter = currentLetter.toLowerCase())
    : (currentLetter = currentLetter.toUpperCase());
  output = output + currentLetter;
}

console.log("output", output);
