//from https://developer.foursquare.com/docs/api/getting-started
import React, { Component } from 'react';

const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: 'ESXBILDONBRKSIT1W2OJIUALG5AJTT0FLPMLYZRAF3EI4XTT',
    client_secret: 'G21WXNZHQBFNNT5PZDH3LW3EB5HEMTHHNZEQTALMKXV4I23T',
    ll: '53.883808,-1.264729',
    query: 'sport',
    v: '20180730',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});

export default Locations;


h//api.foursquare.com/v2/venues/search?ll=53.883808,-1.264729&intent=browse&radius=10000&query=resorts&client_id=ESXBILDONBRKSIT1W2OJIUALG5AJTT0FLPMLYZRAF3EI4XTT&client_secret=G21WXNZHQBFNNT5PZDH3LW3EB5HEMTHHNZEQTALMKXV4I23T