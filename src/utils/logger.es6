// logger.es6
console.info('Mounting logger.es6...');

const FIRST_NAME = 'John';
const LAST_NAME = 'Doe';

let checkName = (firstName, lastName) => {
  if (firstName !== FIRST_NAME || lastName !== LAST_NAME) {
    console.log(firstName + ' ' + lastName + ' : You\'ve NO PERMISSION');
  } else {
       console.log(firstName + ' ' + lastName + ' : You\'re AUTHORIZED');
  }
}

checkName('Jane', 'Doe');
checkName('John', 'Doe');
// eof
