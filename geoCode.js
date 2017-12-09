
const request = require('request');

var geoAddress = (address) => {
    //to encode the address in order to add it to the url
var encodeAddress = encodeURIComponent(address);
 request({ url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
// we can access the location because the information we got back is
    // stringified so what to do ?
    // beside the url add josn:true 
 json: true
},
(error, response, body) => {
    // if we didnt put the if statement then when we entered a wrong adress the program ll crash 
    // now the first condition when we are not able to connect the api
    if(error) {
        console.log('Unable to connect Google api.');
    }
    //when the user entered a wrong address
    // the status is different in every api so you have to try to know the condition 
    else if (body.status === "ZERO_RESULTS"){
        console.log("You entered the wrong address pleas try again.");
    }
    //when the user dont enter an addressa(this in case we dont demand in the argv options)
    else if (body.status === "INVALID_REQUEST"){
        console.log("Please enter your adress");
    }
    else if (body.status === "OK") {
    // to show the objects we got back 
    //but it ll be messy so we have to decide how many lines to show so we ll add 2
    // console.log(JSON.stringify(body, undefined, 2))
    console.log(`Address is: ${body.results[0].formatted_address}`);
    console.log(`location lat: ${body.results[0].geometry.location.lat}`);
    console.log(`location lng: ${body.results[0].geometry.location.lng}`);

    }
}
)
}

module.exports = {
 geoAddress
}