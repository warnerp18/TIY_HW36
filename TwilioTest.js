var twilio = require("twilio");
var accountData = require("./stuff.js").data;
var client = twilio(accountData.sid, accountData.authToken);
 
client.messages.create({
    body: "Hiiiiiiiiii! I can haz beer?",
    to: "+18438192919",
    from: "+18435588080"
    // mediaUrl: ""
}, function(err, message) {
	console.log(err, message)
    // process.stdout.write(message.sid);
});