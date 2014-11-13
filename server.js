/**
 * Module dependencies.
 */

function startServer() {
    var express = require('express'),
        http = require('http'),
        path = require('path'),
        app = express(),
        methodOverride = require('method-override'),
        request = require('request'),
        _ = require('lodash');

    /**
     * LOAD TWILIO STUFF
     */
    var twilio = require("./node_modules/twilio");
    var accountData = require("./stuff.js").data;
    var client = twilio(accountData.sid, accountData.authToken);
    ////////

    function querify(queryParamsObject) {
        return '?' + _.map(queryParamsObject || {}, function(val, key) {
            return key + '=' + val
        }).join('&');
    }

    // adds a new rule to proxy a localUrl -> webUrl
    // i.e. proxify ('/my/server/google', 'http://google.com/')
    function proxify(localUrl, webUrl) {
        app.get(localUrl, function(req, res) {
            var url = [
                webUrl,
                querify(req.query)
            ].join("");

            req.pipe(request(url)).pipe(res);
        });
    }

    function executeTwilio() {
        app.get('/TwilioTest/:message', function(req, res) {
            client.messages.create({
                body: req.params.message,
                to: "+18438192919",
                from: "+18435588080"
                    // mediaUrl: ""
            }, function(err, message) {
                 process.stdout.write(message.AC8700e8b6569496d3e8498f2ff02b3b48);
                // console.log(err, message)
                //res.send(messages)
            });
            
        })
    }

    executeTwilio('/TwilioTest')

    // add your proxies here.
    //
    // examples:
    // proxify('/yummly/recipes', 'http://api.yummly.com/v1/api/recipes');
    // proxify('/brewery/styles', 'https://api.brewerydb.com/v2/styles');

    // all environments
    app.set('port', process.argv[3] || process.env.PORT || 3000);
    app.use(methodOverride());
    app.use(express.static(path.join(__dirname, '')));

    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
}

module.exports.startServer = startServer;
