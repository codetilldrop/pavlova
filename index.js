const fs = require("fs");

function generateImage(name, height, width, pixels) {
  var config = { encoding: "hex" };
  var stream = fs.createWriteStream(name, config);

  var extension = name.split(".")[1];
  if (extension == "bmp") {
    var dataSize = height * width; // size of bitmap data
    var totalSize = dataSize + 54; // size of bitmap data + header size

    var bmpHeader = [];
    bmpHeader.push(0x42, 0x4d); // id field
    // size of file
    bmpHeader.push(0x00, 0x00, 0x00, 0x00); // --unused space--
    bmpHeader.push(0x36, 0x00, 0x00, 0x00); // offset of bitmap data

    var dibHeader = [];
    dibHeader.push(0x28, 0x00, 0x00, 0x00); // size of dib header
    // width in pixels
    // height in pixels
    dibHeader.push(0x01, 0x00); // number of color planes used
    dibHeader.push(0x18, 0x00); // bits per pixel
    dibHeader.push(0x00, 0x00, 0x00, 0x00); // compression
    // size of bitmap data
    dibHeader.push(0x13, 0x0b, 0x00, 0x00); // print resolution (horizontal)
    dibHeader.push(0x13, 0x0b, 0x00, 0x00); // print resolution (vertical)
    dibHeader.push(0x00, 0x00, 0x00, 0x00); // number of colors
    dibHeader.push(0x00, 0x00, 0x00, 0x00); // important colors

    // add bmp header to file
    for (size = 0; size < bmpHeader.length; size++) {
      stream.write(String.fromCharCode(bmpHeader[size]));
    }

    // add dib header to file
    for (size = 0; size < dibHeader.length; size++) {
      stream.write(String.fromCharCode(dibHeader[size]));
    }
  }

  // add bitmap data to file
  for (row = 0; i < height; row++) {
    for (col = 0; i < width; col++) {
      var pos = ((height - row) * width + width) * 3;
      stream.write(String.fromCharCode(pixels[pos]));
      stream.write(String.fromCharCode(pixels[pos + 1]));
      stream.write(String.fromCharCode(pixels[pos + 2]));
    }
  }
  stream.end();
}

function convertImage(name, newName) {
  fs.renameSync(name, newName);
}

// var config = { encoding: "ascii" };
// var stream = fs.createWriteStream("test.txt", config);
// console.log(String.fromCharCode(0x4c));
// stream.write(String.fromCharCode(0x4c));
// stream.end();

var name = "hello.bmp";
var extension = name.split(".")[1];
console.log(extension);

var num = 0xff4455;
var pixel = num.toString(16);
var red = pixel[0] + pixel[1];
var green = pixel[2] + pixel[3];
var blue = pixel[4] + pixel[5];
console.log(red, green, blue);

var pixels = [0x2318, 0xf8ff, 0x2325];
var pos = 0;
console.log(String.fromCharCode(pixels[pos]));
console.log(String.fromCharCode(pixels[pos + 1]));
console.log(String.fromCharCode(pixels[pos + 2]));
