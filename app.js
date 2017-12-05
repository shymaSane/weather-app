const request = require('request')

request('http://maps.googleapis.com/maps/api/geocode/json?address=%20amman',
(error, response, body) => {
    console.log(body)
}
)