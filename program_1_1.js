const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, 'input_1_1.txt')).toString()

let increases = 0;

const lines = input.split('\n');

let lastNum = null;

for (const line of lines) {
    const num = parseInt(line);

    if (lastNum === null) {
        lastNum = num;
        console.log(`${num} (N/A)`)
        continue;
    }

    if (num > lastNum) {
        increases++;
        console.log(`${num} (Increase)`)
    } else console.log(`${num} (Decrease)`)

    lastNum = num;
}

console.log(`Increases: ${increases}`);