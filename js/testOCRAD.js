var testing = function() {
    console.log("hi")
    var testImage = new Image();
    testImage.src = '../image.png';
    testImage.src = '../test.png';


    var canvas = document.createElement("canvas");
    canvas.width = 287;
    canvas.height = 382;
    var context = canvas.getContext('2d');
    testImage.onload = function() {
        context.drawImage(testImage, 0, 0);
        var string = OCRAD(canvas);
        console.log(string);
    }
};

testing()
