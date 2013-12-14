lsfilter = require('./lsfilt')

function printFileList(err, fileList) {
    if (err) {
        return console.error('Error in fs.readdir: ', err);
    }
    fileList.forEach(function(x) {console.log(x);})
}

lsfilter(process.argv[2], process.argv[3], printFileList);

