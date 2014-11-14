// Put event listeners into place
window.addEventListener("DOMContentLoaded", function() {
    // Grab elements, create settings, etc.
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = {
            "video": true
        },
        errBack = function(error) {
            console.log("Video capture error: ", error.code);
        };

    // Put video listeners into place
    if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(videoObj, function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    } else if (navigator.mozGetUserMedia) { // Firefox-prefixed
        navigator.mozGetUserMedia(videoObj, function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }

}, false);
var content = canvas.getContext("2d");
document.getElementById("snap").addEventListener("click", function() {
    content.drawImage(video, 0, 0, 640, 480);

});


// function hasGetUserMedia() {
//   return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
//             navigator.mozGetUserMedia || navigator.msGetUserMedia);
// }

// if (hasGetUserMedia()) {
//   // Good to go!
// } else {
//   alert('getUserMedia() is not supported in your browser');
// }

//   var errorCallback = function(e) {
//     console.log('Reeeejected!', e);
//   };

//   // Not showing vendor prefixes.
//   navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
//     var video = document.querySelector('video');
//     video.src = window.URL.createObjectURL(localMediaStream);

//     // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
//     // See crbug.com/110938.
//     video.onloadedmetadata = function(e) {
//       // Ready to go. Do some stuff.
//     };
//   }, errorCallback);
// </script>