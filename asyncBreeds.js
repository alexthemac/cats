// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, catFileData) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // PASS DATA TO CALLBACK FUNCTION, AS OPPOSED TO RETURNING IT DIRECTLY (CAN'T RETUN DATA FROM ASYNC FUNCTION)
    if (!error) catFileData(data);
  });
};

//NEW CALL BACK FUNCTION TO CONSOLE LOG DATA ONCE IT'S READ
const catFileData = function(data1) {
  console.log('Return Value: ', data1);
}

//Call the breedDetailsFromFile function, passing the breed and the callback function.
breedDetailsFromFile('Bombay', catFileData);
