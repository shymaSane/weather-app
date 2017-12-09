
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
        string: true
      }
})
.help()
.argv; 

// to get the address
var address = argv.address;


geoCode.geoAddress(address)

