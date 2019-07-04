//take a URL as a CL argument as well as a local file path and download the resource to the specific path

const request = require("request");
const args = process.argv.slice(2); //[url, filepath]
let breed = args[0].toLowerCase();

const reqAndWrite = function(callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (!error) {
      callback(body);
    } else {
      console.log(`Oops! Error: ${error}`);
    }
  });
};
  
reqAndWrite((body) => {
  const data = JSON.parse(body);  //object is the only element in an array
  if (data[0] === undefined) {
    console.log("Sorry that breed was not found");
  } else {
    console.log(data[0].description);
  }
});
