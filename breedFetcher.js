const request = require('request');

const fetchDesccription = breed => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (response.statusCode !== 200) {
      console.log(`Sorry! Something went wrong: ${body}'`);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('No breed name found');
    } else {
      console.log(data[0].description);
    }
  });
};

const input = process.argv.slice(2);
const breed = input[0];

fetchDesccription(breed);