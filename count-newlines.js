var fs = require('fs')

var fileBuf = fs.readFileSync(process.argv[2])
var lines = fileBuf.toString().split('\n')
console.log(lines.length - 1)
