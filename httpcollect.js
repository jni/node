var http = require('http')
var bl = require('bl')

function handle (response) {
    response.pipe(bl(function (err, data) {
        var data2 = data.toString();
        console.log(data2.length);
        console.log(data2);
        }))
}

http.get(process.argv[2], handle)

