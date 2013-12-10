var fs = require('fs')

function filterFileList(err, fileList) {
    if (err) throw err;
    var ext = "." + process.argv[3]
    for (var i = 0; i < fileList.length; i++) {
        var filename = fileList[i]
        if (filename.length - ext.length == filename.lastIndexOf(ext)) {
            console.log(filename)
        }
    }
}

var directory = process.argv[2]
fs.readdir(directory, filterFileList)

