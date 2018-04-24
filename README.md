# pavlova
The pavlova library allows you to generate custom images using pixel arrays without fear of corrupted files. Pavlova currently supports a small selection of image formats, namely:
+ .bmp

In future, a larger library of formats may be supported, including:
+ .jpg/jpeg
+ .gif
+ .tiff
+ .ico

Current version: *0.0.1*

## Installation
1. Run `npm i pavlova` in the shell to install the module.
2. Add the following to your .js file to use the module.
```js
const pavlova = require("pavlova");
// the rest of your code...
```

## Functions
#### generateImage
Creates a image containing the
```js
pavlova.generateImage(name, height, width, pixels);
```
*name* - a string containing the file name of the new image (including the extension)

*height* - the height of the image in pixels

*width* - the width of the image in pixels

*pixels* - an array containing the color values of the pixels in the image as 3 byte hex values, organised left-to-right then top-to-bottom

## In development
#### convertImage
Converts an existing file to a new image format
```js
convertImage(name, newName);
```
*name* - a string containing the file name of an existing image (including the extension)

*newName* - a string containing the name of the new image (including the extension)

#### Support for .png

## Changelog
**0.0.1**
+ Added generateImage function
+ Support of .bmp files
