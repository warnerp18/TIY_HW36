var testOCR = function(){
	var testImage = new Image();
	testImage.src = document.getElementById("image-file").value;

	var canvas = document.createElement("canvas");
	canvas.width = 411;
	canvas.height = 101;
	var context = canvas.getContext('2d');
	testImage.onload = function() {
		context.drawImage(testImage, 0, 0);
		var string = OCRAD(canvas);
		console.log(string);
	}


	// var canvas = document.getElementById('myCanvas');
	// var context = canvas.getContext('2d');
	// var testImage = new Image()
	// testImage.src = '../test.png';

	// testImage.onload = function() {
	// 	context.drawImage(testImage, 0, 0);
	// 	var string = OCRAD(canvas)
	// 	console.log(string)
	// }
}

// testOCR();

// $('#send').on('click', node TwilioTest.js);

