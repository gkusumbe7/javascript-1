const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first value: ', (firstValue) => {
  rl.question('Enter the second value: ', (secondValue) => {
    let x = parseInt( firstValue);
    let y = parseInt(secondValue) ;
    console.log(x+y);
    // Yahan aap input values ke saath jo bhi karna chahte hain wo kar sakte hain
    rl.close();
  });
});