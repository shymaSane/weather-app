const request = require('request')

request({ url: 'http://maps.googleapis.com/maps/api/geocode/json?address=%20amman',
// we can access the location becouse the information we got back is
    // stringified so what to do ?
    // beside the url add josn:true 
 json: true
},
(error, response, body) => {
    // to show the objects we got back 
    //but it ll be messy so we have to decide how many lines to show so we ll add 2
    console.log(JSON.stringify(body, undefined, 2))
}
)