const fs = require('fs');

let jsonTest = fs.readFileSync('./test.json');
parsedJson = JSON.parse(jsonTest.toString());
parsedJson["name"] = "Kay";
parsedJson["age"] = 29;
console.log(parsedJson);

stringedJSON = JSON.stringify(parsedJson);
console.log(stringedJSON);

fs.writeFileSync('./test.json', stringedJSON)