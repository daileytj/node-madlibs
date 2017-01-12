'use strict';

// Request and response object drills
// ==================================

var express = require('express');
var app = express();

// your code here. 
var doMadLib = function doMadLib(params) {
  var adjective1 = params.adjective1,
      adjective2 = params.adjective2,
      adjective3 = params.adjective3,
      adverb = params.adverb,
      name = params.name,
      noun = params.noun,
      place = params.place;
      
      //different approach
    //   var output = 'There\'s a <b>' + params.adjective1 + '</b> new <b>' + params.name + '</b> in <b>' + params.place + '</b> and everybody is talking. <br />';
    //     output += 'Stunningly <b>' + params.adjective2 + '</b> and <b>' + params.adverb + '</b> <b>' + params.adjective3 + '</b>, all the cool kids know it. <br />';
    //     output += 'However, <b>' + params.name + '</b> has a secret - <b>' + params.name + '\'s</b> a vile vampire. <br />';
    //     output += 'Will it end with a bite, or with a stake through the <b>' + params.noun + '</b>?';
        
    //     return output;

  return name + ' was wrestling a ' + adjective1 + ' bear! When all of a sudden a ' + adjective2 + ' ' + noun + ' ' + ('jumped ' + adverb + ' in between them. The bear then climbed a ' + adjective3 + ' tree. ') + ('And from that day forward that\'s why they call that place ' + place);
};

app.get('/', function (request, response) {
  var outputResponse = doMadLib(request.query);
  return response.send(outputResponse);
});

// listen for requests :)
app.listen(process.env.PORT || 8080, function () {
  return console.log('Your app is listening on port ' + (process.env.PORT || 8080));
});