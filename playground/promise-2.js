const request = require('request');

var geocodeAddress = (address) => {

    var encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=Ek3eTN9uBRR7MdLmvAnDuhR0C9QGRGZ8&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to server')
            } else if (body.results[0].locations[0].geocodeQualityCode === "A1XAX") {
                reject('Unable to find that address')
            } else if (body.statusCode !== "A1XAX") {
                resolve({
                    address: body.results[0].providedLocation.location,
                })
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (err) => {
    console.log(err);
})