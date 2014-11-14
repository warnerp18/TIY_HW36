//creates our pacakageTask model to use in our collection.
var packageTask = Backbone.Model.extend({
    defaults: { title: "New Package" }
})

//creates our packageTaskCollection using BackFire. WATCH OUT! don't get burnt!
var packageTaskCollection = Backbone.Firebase.Collection.extend({
    model: packageTask,
    firebase: "https://burning-inferno-529.firebaseio.com/"
});