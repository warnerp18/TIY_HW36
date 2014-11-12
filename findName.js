(function(window, undefined) {
    "use strict";

     var findName = Backbone.Model.extend({
        
        defaults: {
            url: "https://burning-inferno-529.firebaseio.com.json",
            id: "/ID"
        },

        urlRoot: function(data){
        	console.log( [
        		this.get('url'),
        		this.get('id')
        	].join(""))
        	 
        }


    });

var test = new findName();
test.urlRoot()




    // window.showName = Backbone.View.extend({
    //     template: "<div class='occupants'></div>",
    //     initialize: function(options) {

    //         // something here??
    //     }
    // })







    //var myDataRef = new Firebase('https://wbprqo23n7m.firebaseio-demo.com/');
    //
    //
    // $.getJSON('https://burning-inferno-529.firebaseio.com/ID.json').then(function(data){
    // console.log(data);

    // })
    
window.findName = findName;
})(window, undefined);
