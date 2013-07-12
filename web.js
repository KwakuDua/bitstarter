//
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var fileContent;

try {
    fileContent = fs.readFileSync('index.html','utf8');
}
catch(err){
   console.log(err);
} 

if(fileContent)
{

app.get('/', function(request, response) {
  //response.send('Hello World2!');
/**
fs.readFile('/index','utf8',function callBack(err,content){

   if(err) return handleError(err);
*/   
response.send(fileContent.toString());

//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
});
}
/**}
function callBack(err, content){

  if(err){
    return handError(err)
}
  else {
      
response.send(content);
}


} */
