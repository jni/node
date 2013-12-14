var fs = require('fs')

function filterFilesByExtension(directory, extension, callback) {
    var regex = new RegExp('\\.' + extension + '$')
    function readdirCallback(err, fileList) {
        if (err) {
            return callback(err)
        }
        fileList = fileList.filter(function(x) {return regex.test(x);})
        callback(null, fileList);
    }
    fs.readdir(directory, readdirCallback);
}

module.exports = filterFilesByExtension

