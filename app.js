
const request = require('request')
const yargs = require('yargs')
const argv = yargs
.options({
    //since we dont have any commands for this project we are using optons to determine 
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
.argv

request({ url: 'http://maps.googleapis.com/maps/api/geocode/json?address=%20amman',
// we can access the location because the information we got back is
    // stringified so what to do ?
    // beside the url add josn:true 
 json: true
},
(error, response, body) => {
    // to show the objects we got back 
    //but it ll be messy so we have to decide how many lines to show so we ll add 2
    // console.log(JSON.stringify(body, undefined, 2))
    console.log(`Address is: ${body.results[0].formatted_address}`)
    console.log(`location lat: ${body.results[0].geometry.location.lat}`)
    console.log(`location lng: ${body.results[0].geometry.location.lng}`)
}
)