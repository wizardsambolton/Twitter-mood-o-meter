// Authentication for Twitter API
var OAuth = require('node_modules/oauth/lib/OAuth');
var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'PKMs5qGHrkfRqMIfqVa8NTD9q', // Application key
      'lXPrTTSxSL0WZvskrdFHF9QoJEk2dHAmcLIOu1BEnBg4nmimYx', // Application secret
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      '3359191738-ilVw7893ZDcdLwoNrWkYZx09JHjDyuyG21fOp1w', // Access token
      //you can get it at dev.twitter.com for your own apps
      'DKNzSY0Ni3zwjq1dIPODpiVKZWdDrjQDjHPyiGsjRU9Gl', 
      //you can get it at dev.twitter.com for your own apps
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data));
        done();      
      });    
});