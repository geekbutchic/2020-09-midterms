// Your code below.
function isValidPassword(str) {
  if (str.includes('.') || (str.includes(' ')) || (str.length < 12)) {
      return false;
  } else {
      return true;
  }
}

// returns false = no spaces 
// returns false = no periods 
// returns false = 12 characters long 

const onlyCs = function (grades) {
  const newGrades = [];
  for (const grade of grades) {
      if (grade < 79 && grade < 70 ) {
          newGrades.push(grade);
      }
  }  
  return newGrades;
}

// try array.filter(function(a){return a>=3&&a<=6}). for [1,2,3,3.1,4,6.1], it will return [3,3.1,4]


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
