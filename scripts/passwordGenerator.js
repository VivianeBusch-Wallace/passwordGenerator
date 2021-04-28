console.log("------------Password generator--------------");
// Create a program that generates a random password with the length of 30 characters, every time you call the function, it should give you a different password.
// Examples:
// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

const passwordGenerator2 = () => {
  let inputNum = document.querySelector("#num-from-user").value;
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
  for (let i = 0; i < inputNum; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  let result = document.querySelector(".password-result");

  return (result.innerHTML = password);
};

//user clicks on generate button
const genButton = document.querySelector("#generate-pw");
genButton.addEventListener("click", passwordGenerator2);
// Check if input is a number
// limit to only 100 digits?
// Note: cannot assign method to a variable
