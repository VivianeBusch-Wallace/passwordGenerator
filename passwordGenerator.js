// Checking if this is the file
console.log("------------Password generator--------------");
// Create a program that generates a random password with the length of 30 characters, every time you call the function, it should give you a different password.
// Examples:
// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

const passwordGenerator2 = () => {
  let characters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    7,
    8,
    9,
    "!",
    "§",
    "$",
    "%",
    "&",
    "?",
    "@",
    "€",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
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
  let password = "";
  for (let i = 0; i < 30; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
};

console.log(passwordGenerator2());

// Alternative:

const passwordGen = () => {
  // let numb = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9]; //left out because unnecessary
  let alphaLower = [
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
    let alpha = alphaLower[Math.floor(Math.random() * alphaLower.length)];
    let alphaUpper = alpha.toUpperCase();
    let randomNumber = Math.floor(Math.random() * 100) + 1; //outputs a random number between 1 and 100 (inclusive)

    if (randomNumber % 2 == 0) {
      password += alpha; //a random lower case letter
    }
    if (randomNumber % 3 == 0) {
      password += Math.floor(Math.random() * 100); //double random - wohoo! :) - outputs a number between 0 and 99 (inclusive)
    }
    if (randomNumber % 5 == 0) {
      password += alphaUpper; //a random upper case letter
    } else {
      password += spChr; //a random special character
    }
  }
  //   console.log(password); //to check password's actual length
  return password.substring(0, 30); //cuts the password to the first 30 characters
};
console.log(passwordGen());
