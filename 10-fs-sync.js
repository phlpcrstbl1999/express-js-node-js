const { readFileSync, writeFileSync } = require('fs')
console.log("start")
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first + "\n" + second)

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' } // 'a' flag to append to the file
)

console.log("done with this task")
console.log("starting the next task")