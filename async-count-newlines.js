var fs = require('fs')

function countFileBufLines(err, fileBuf) {
    if (err) throw err;
    var lines = fileBuf.toString().split('\n')
    console.log(lines.length - 1)
}

var filename = process.argv[2]
fs.readFile(filename, countFileBufLines)

