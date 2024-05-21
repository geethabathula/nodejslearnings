const readline = require('readline');

//To read ip and op
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//To show prompt on the terminal
rl.question("Enter you name: ", (name) => {
    console.log(`Your name is ${name}`);
    rl.close();
})

rl.on('close', () => {
    console.log("Interface is Closed");
    process.exit(0);
})