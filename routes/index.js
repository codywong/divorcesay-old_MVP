var express = require('express');
var router = express.Router();
var url = require('url');
var https = require('https');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});



///////////////////////////////////////
// credentials
var service_url = 'https://watson-wdc01.ihost.com';
var service_username = 'ut_student4';
var service_password = 'At46pv42';
var auth = "Basic " + new Buffer(service_username + ":" + service_password).toString("base64");
/////////////////////////////////////////////


// handle form
router.post('/', function(req, res) {
	console.log("post received:");
	console.log(req.body);

//********************************** HARD CODING QUESTION
	var createdQuestion = "If I am getting a divorce, my income is around $60,000, my wife income is around $80,000, we have a 9-year-old child, a 7-year-old child, a 6-year-old child, who will get child custody?";
	// var questionConditions = createSentence(req.body.fields, req.body.values);
	// var question = questionConditions + "who will get the child custody?"

	// select our watson instance
	var parts = url.parse(service_url + '/instance/507/deepqa/v1/question');
	// create the request options to POST our question to Watson
	var options = {
	    host: parts.hostname,
	    port: parts.port,
	    path: parts.pathname,
	    method: 'POST',
	    headers: {
	        'Content-Type': 'application/json',
	        'Accept': 'application/json',
	        'X-synctimeout': '30',
	        'Authorization': auth
	    }
	};

	// create the question to Watson
	var questionData = {
	    'question': {
	        // 'evidenceRequest': {
	        //     'items': 2 // the number of anwers
	        // },
	        'questionText': createdQuestion // the question
	    }
	};


	// Create a request to POST to Watson
	var watson_req = https.request(options, function(result) {
		// console.log(result['question']);
	    // result.setEncoding('utf-8');
	    // var response_string = '';

	    // result.on('data', function(chunk) {
	    //     response_string += chunk;
	    // });

	    // result.on('end', function() {
	    //     var answers_pipeline = JSON.parse(response_string),
	    //         answers = answers_pipeline[0];
	    //     return res.render('index', {
	    //         'questionText': req.body.questionText,
	    //         'answers': answers
	    //     })
	    // })

	});
	watson_req.on('error', function(e) {
	    return res.render('index', {
	        'error': e.message
	    })
	});


	// Set the POST body and send to Watson
	watson_req.write(JSON.stringify(questionData));
	watson_req.end();



	res.render('index', {title: 'Express'});
	});

module.exports = router;

/*********** createSentence() ***********
 * this function takes the user's form input and generates them into a sentence
 * i.e. given a=1, b=2
 *		function gives: "If I am getting a divorce, a is 1, b is 2 "
 */
var createSentence = function(fields, values) {
    // start with basic condition
    var questionConditions = "If I am getting a divorce, ";
    // concatenate conditions together based on what is filled in on the form
    for (i = 0; i < fields.length; i++) {
        switch (fields[i]) {
            case "Child":
                questionConditions += "we have a " + values[i] + " year-old child, ";
                break;

            case "Your Annual Income":
                questionConditions += "my income is around $" + values[i] + ", ";
                break;

            case "Spousal Annual Income":
                questionConditions += "my spouse has an income of around $" + values[i] + ", ";
                break;

            case "Matrimonial Home":
                questionConditions += "we have a matrionial home worth around $" + values[i] + ", ";
                break;

            case "Marriage Length":
                questionConditions += "we have been married for " + values[i] + " years, ";
                break;
        }
    }

    return questionConditions;
}
