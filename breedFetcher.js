//take a URL as a CL argument as well as a local file path and download the resource to the specific path

const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (body === "[]") {  //invalid breed
      callback(error, null);
    } else {
      let desc = (JSON.parse(body))[0].description;
      callback(error, desc);
    }
  });
};

module.exports = {fetchBreedDescription};