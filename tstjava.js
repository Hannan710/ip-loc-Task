const readline = require('readline');
const dictionary = require('./dictionary.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a term to find its definition: ', term => {
  const entry = dictionary.find(entry => entry.term.toLowerCase() === term.toLowerCase());
  if (entry) {
    console.log(`Definition of ${entry.term}: ${entry.definition}`);
  } else {
    console.log(`No definition found for ${term}`);
  }
  
  rl.close();
});
