(function(window, undefined) {
    "use strict";

    var FindName = Backbone.Model.extend({

        defaults: {
            url: "https://burning-inferno-529.firebaseio.com",
            id: "/ID.json"
        },

        url: function() {
            return [
                this.get('url'),
                this.get('id')
            ].join("");

        },

        initialize: function() {
            var self = this;
            return this.fetch().then(function(model) {
                var resArray = [];

                for (var x in model) {
                    resArray.push(model[x]);
                }
                console.log(model);
                console.log(resArray);

                resArray.forEach(function(element) {
                    new ApartmentView(element)
                })

                // template: "<div class='large-9 push-3 columns display'<h1>OCR Result<p>{firstname.firstname</h1><p>Tenant</p><p>Address</p>",
                // getUserData: function() {



                //     // model.forEach(function(element){
                //     // 	var 
                //     // })

                //     // var firstName = model
                //     // var firstName = self.get('firstName');
                //     // var lastName = self.get('lastName');
                //     // var address = self.get('address');
                //     // var tenantData = [firstName, lastName, address];  

                //     // return tenantData ? _.template(self.template, tenantData) : null;

                // });
            });
        }

        //    template: "<div class='row'><div class='large-10 columns'><a href='{link[0].$text}' target='_blank'><h4>{title.$text}</h4></a></div></div><hr/>",
        // render: function() {
        //     this.el.innerHTML = _.template(this.template, this.options);


    });

    var ApartmentView = Backbone.View.extend({
        tagname: "div",

        classname: "package",

        initialize: function(opts) {
            this.options = _.extend({}, {
                    $container: $('#list')
                },
                opts
            );
            this.options.$container.append(this.el);
            this.render();
        },

        template: "<div class='row'><div class='large-12 columns'><a href=#><h4 class=text-center><%= firstName %> at address: <%= address %></h4></a></div></div><hr/>",
        render: function() {
        	console.dir(this.options);
        	console.dir(this.template);
            this.el.innerHTML = _.template(this.template, this.options);
        }

    })


    var test = new FindName();




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

    window.FindName = FindName;
})(window, undefined);
