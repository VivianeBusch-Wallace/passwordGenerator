console.log("------------Password generator--------------");
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password
// Examples:
// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

const passwordGen = () => {
  // let numb = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
  let alphaLc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
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
  let specialCharacters = ["!", "§", "$", "%", "&", "?", "@", "€"];
  let password = "";

  for (let i = 0; i < 30; i++) {
    let spChr =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    let alpha = alphaLc[Math.floor(Math.random() * alphaLc.length)];
    let alphaUpper = alpha.toUpperCase();
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber % 2 == 0) {
      password += alpha;
    }
    if (randomNumber % 3 == 0) {
      password += Math.floor(Math.random() * 10);
    }
    if (randomNumber % 5 == 0) {
      password += alphaUpper;
    } else {
      password += spChr;
    }
  }
  return password.substring(0, 30);
};
console.log(passwordGen());

// Alternative:

// const passwordGen = () => {
//   let characters = [
//     0,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     6,
//     7,
//     8,
//     9,
//     "!",
//     "§",
//     "$",
//     "%",
//     "&",
//     "?",
//     "@",
//     "€",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let password = "";
//   for (let i = 0; i < 30; i++) {
//     password += characters[Math.floor(Math.random() * characters.length)];
//   }
//   return password;
// };

// console.log(passwordGen());
