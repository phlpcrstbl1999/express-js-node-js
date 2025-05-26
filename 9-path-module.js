const path = require('path')

console.log(path.sep) // platform-specific path separator

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath) // joined path

const base = path.basename(filepath)
console.log(base) // base name of the file

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute) // absolute path to the file