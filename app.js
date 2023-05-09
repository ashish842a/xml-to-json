let fs = require("fs")

let parseString = require('xml2js').parseString;
//xml data
var xmldata = `<node>
				<hello>World</hello>
				<nested>
				<bloop>Bleep</bloop>
				</nested>
				</node>`;
// parsing xml data
parseString(xmldata, function (err, results) {

// parsing to json
let data = JSON.stringify(results)

// display the json data
console.log("results",data);
});

