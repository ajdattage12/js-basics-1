const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome! Please enter your password.", function(input){
	tokens = input.split(' '); 

    password = tokens[0];
	passwordInput = Number(tokens[1]);


    if(passwordInput > 10){
        console.log("Congratulations! You're have successfully entered a password that meets the requirements.");
    } else{
        (passwordInput < 10)
        console.log("Opps! Please try that again.")
}
    
    });