//--------Create Image array------------//
var createImage = function(src, title){
  var img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
  return img;
}

var images = [];

//--------12 Images for twelve words--------//
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));
images.push(createImage("X.jpg","foo title"));

//-----------Create Variable with Corresponding Letter Pressed-----//

document.onkeyup = function(event) {

  var letter = String.fromCharCode(event.keyCode).toLowerCase();
        	
}

