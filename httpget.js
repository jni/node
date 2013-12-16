http = require('http')

function handle (response) {
    response.setEncoding("utf8");
    response.on("data", function(str) { console.log(str); })
    response.on("error", function(str) { console.log("ERROR :" + str); })
}

http.get(process.argv[2], handle)

