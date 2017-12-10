
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
     geoCode.getWeather(results.latitude, results.longitude, (errorMes, weather) => {
         if(errorMes){
             console.log(errorMes)
         }
            console.log(`The weather today is: ${weather.summary}`);
            console.log('........................');
            console.log(`The highest temperature today is: ${weather.high}  ْf`);
            console.log('........................');
            console.log(`The lowest temperature today is: ${weather.low}  ْf`);
     });
 }
})

