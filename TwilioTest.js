var twilio = require("./node_modules/twilio");
var accountData = require("./stuff.js").data;
var client = twilio(accountData.sid, accountData.authToken);
 
var send = function(){
		client.messages.create({
	    body: "Hiiiiiiiiii! I can haz beer?",
	    to: "+12814333931",
	    from: "+18326481745"
	    // mediaUrl: ""
	}, function(err, message) {
		console.log(err, message)
	    // process.stdout.write(message.sid);
	});
}

send();

// $('#send').on('click', send());
