var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var fileContent;
var content="";
try {
    fileContent = fs.readFileSync('index.html','utf8');
}
catch(err){
   console.log(err);
} 

if(fileContent)
{
content+=fileContent;

app.get('/', function(request, response) {
 
response.send(content);

});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
}
