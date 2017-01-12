'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// your code here. 
const doMadLib = (params) => {
  const {adjective1, adjective2, adjective3, adverb, name, noun, place} = params;
  return(
    `${name} was wrestling a ${adjective1} bear! When all of a sudden a ${adjective2} ${noun} ` + 
    `jumped ${adverb} in between them. The bear then climbed a ${adjective3} tree. ` +
    `And from that day forward that's why they call that place ${place}`);
};

app.get('/', (request,response) => response.send(doMadLib(request.query)));

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
