// Your code below.
function isValidPassword(str) {
  // should I Not go to lunch 
  if (str.includes('.') || (str.includes(' ')) || (str.length < 12)) {
    return false;
  } else {
    return true;
  }
}

const isValidPasswordAlt = function (password) {
  return !password.includes('.') && password.includes(' ') || password.length < 12;
  // like asking should I got lunch 
}
// returns false = no spaces 
// returns false = no periods 
// returns false = 12 characters long 

const onlyCs = function (grades) {
  const newGrades = [];
  for (const grade of grades) {
    if (grade >= 70 && grade <= 79) {
      newGrades.push(grade);
    }
  }
  return newGrades;
}

// returns grade between 70 and 79

const countBs = function (grades) {
  let count = 0;
  for (const grade of grades) {
    if (grade >= 80 && grade <= 89) {
      count++;
    }
  }
  return count;
}
// manual looping version
// up the count 

const lastIndexOfPunctuation = function (str) {
  for (let i = str.length - 1; i >= 0, i--) {
    const char = str[i];
    if (char === '.' || char === '?' || char === '!') {
      return i;
    }
  }
  return -1;
}

const lastIndexOfPunctuation 











// Our code below. Don't touch!


if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
