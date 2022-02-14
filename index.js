import http from 'http';
import calculator from './calculator.js';
import fs from 'fs';

// Using calculator perform arithmetic operations.
async function newFunction() {
  await calculator();

  // now wait for firstFunction to finish...
  // Asynchronous read
  fs.readFile('./jobs.json', function (err, data) {
    if (err) {
      return console.error(err);
    } else {
      var arrayData = []
      fs.readFile('./technologies.json', function (err, technologies) {
        let JSONdata = JSON.parse(data.toString());
        let tech = JSON.parse(technologies.toString());
        JSONdata.forEach(element => {
          arrayData.push({
            "company": element.company,
            "type": element.type,
            "description": element.description,
            "tags": [tech[277], tech[300]],
            "processing_timestamp": Math.floor(new Date().getTime() / 1000)
          })
        });
        console.log(typeof arrayData)
        fs.appendFile('./sample_expected_output.txt ', JSON.stringify(arrayData), 'utf8',

          // Callback function
          function (err) {
            if (err) {
              throw err;
            }
            // If data

            console.log("Data is appended to file successfully.")
          });
      })
    }
  });
};


newFunction()

const server = http.createServer(() => {
  res.end('Server started successfully');
}).listen(5000);


export default server;

