
const yargs = require('yargs');
const geoCode = require('./geoCode')

const argv = yargs
.options({
    //since we dont have any commands for this project we are using options to determine 
    //what rules we want to apply.
    // to test it write node app.js -a 'amman'
    'a': {
        alias: 'address',
        demandOption: true,
        describe: 'you need the address to know the weather',
        type: 'string'
      }
})
.help()
.argv; 

// to get the address
var address = argv.address;

//calling the function from geoCode.js 
//its always better to move th functionality to another file and use this file just for calling 
//putting address and callback because i want to do different things for the results getting from the geoAddress function 
geoCode.geoAddress(address, (errorMessage, results) => {
 if(errorMessage){
     console.log(errorMessage);
 } else {
     console.log(JSON.stringify(results, undefined, 2));
     geoCode.getWeather(results.latitude, results.longitude);
 }
})

