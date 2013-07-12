var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
fs.readFile('/index','utf8',function callBack(err,content){

   if(err) return handleError(err);
   response.send(content);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
});

/**
function callBack(err, content){

  if(err){
    return handError(err)
}
  else {
      
response.send(content);
}


} */
