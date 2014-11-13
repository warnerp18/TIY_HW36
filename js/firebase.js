var myFirebaseRef = new Firebase("https://burning-inferno-529.firebaseio.com/");

// $.getJSON('https://docs-examples.firebaseio.com/rest/quickstart/users.json').then(function(data){
//     console.log(data)
// });



// curl -X POST -d '{
//   "name": "Joe Smith",
//   "address": "1134 Salisbury Dr."
// }' https://burning-inferno-529.firebaseio.com/ID.json

var createInputObject = function() {
    "use strict";
    var input = {};
    var inputs = $(':input');
    
    $(':input').each(function() {
        input[this.name] = this.value;
    });

    var p = $.Deferred();
    p.resolve(input);
    return p;
};

// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "address": "200 Salisbury Dr."
// }

var postData = function(input) {
    console.dir(input);
    var data = {
        firstName: input.firstName,
        lastName: input.lastName,
        address: input.address
    }
    $.post('https://burning-inferno-529.firebaseio.com/ID.json', JSON.stringify(data))
}

$('#send').on('click', function(){
    $.when(
        createInputObject()
    ).then(function(input){
        postData(input)
    })
});

var getData = function() {
    $.getJSON('https://burning-inferno-529.firebaseio.com/ID.json').then(function(data){
        console.dir(data);
    });
};

getData();



