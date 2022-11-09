const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second) // read file

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
  ) // if adding flag then it will overwrite, if remove flag object not over write
  console.log('done with this task')
  console.log('starting the next one')