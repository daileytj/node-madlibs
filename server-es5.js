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

  return name + ' was wrestling a ' + adjective1 + ' bear! When all of a sudden a ' + adjective2 + ' ' + noun + ' ' + ('jumped ' + adverb + ' in between them. The bear then climbed a ' + adjective3 + ' tree. ') + ('And from that day forward that\'s why they call that place ' + place);
};

app.get('/', function (request, response) {
  return response.send(doMadLib(request.query));
});

// listen for requests :)
app.listen(process.env.PORT || 8080, function () {
  return console.log('Your app is listening on port ' + (process.env.PORT || 8080));
});