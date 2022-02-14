import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export default async function calculator() {
    const rl = readline.createInterface({ input, output });

    const answer = await rl.question('Perform Operation \n Want to perform sum type 1 \n Want to perform subtract type 2 \n Want to perform multiply type 3 \n Want to perform divide type 4');
    if (parseInt(answer) < 1 || parseInt(answer) > 4) {
        console.log(`Please enter valid input!`);
        rl.close();
    } else {
        const num1 = await rl.question('Enter first number');
        const num2 = await rl.question('Enter second number');
        let total = 0;
        switch (parseInt(answer)) {
            case 1:
                total = parseInt(num1) + parseInt(num2);
                console.log('Sum of ' + num1 + ' and ' + num2 + ' is: ' + total);
                break;
            case 2:
                total = parseInt(num1) - parseInt(num2);
                console.log('Subtraction of ' + num1 + ' and ' + num2 + ' is: ' + total);
                break;
            case 3:
                total = parseInt(num1) * parseInt(num2);
                console.log('Multiplication of ' + num1 + ' and ' + num2 + ' is: ' + total);
                break;
            case 4:
                total = parseInt(num1) / parseInt(num2);
                console.log('Division of ' + num1 + ' and ' + num2 + ' is: ' + total);
                break;
            default:
                total = parseInt(num1) + parseInt(num2);
                console.log('Sum of ' + num1 + ' and ' + num2 + ' is: ' + total);
                break;
        }
        // console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.close();
    }
}
