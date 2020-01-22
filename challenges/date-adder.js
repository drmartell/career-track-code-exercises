// Create a function add that takes a date and diff and returns a new date with diff added to the original date.
// date is a Date object.
// diff is a string representing the amount of time to add to date
// diff is a number followed by an operator
// e.g. 10d would add ten days

// s	seconds
// m	minutes
// h	hours
// d	days
// w	weeks
// M	months
// y	years

const add = (date, diff) => {
  let newDate = new Date(date);
  const number = +diff.slice(0, -1);
  const operator = diff.slice(-1);
  switch(operator) {
    case 's':
      newDate = new Date(newDate.getTime() + (number * 1000));
      break;
    case 'm':
      newDate = new Date(newDate.getTime() + (number * 60 * 1000));
      break;
    case 'h':
      newDate = new Date(newDate.getTime() + (number * 60 * 60 * 1000));
      break;
    case 'd':
      newDate = new Date(newDate.getTime() + (number * 24 * 60 * 60 * 1000));
      break;
    case 'w':
      newDate = new Date(newDate.getTime() + (number * 7 * 24 * 60 * 60 * 1000));
      break;
    case 'M':
      newDate.setMonth(date.getMonth() + number);
      break;
    case 'y':
      newDate.setFullYear(date.getFullYear() + number);
      break;
    default:
      'Error: time operator not recognized.';
  }
  return newDate;
};

module.exports = add;
