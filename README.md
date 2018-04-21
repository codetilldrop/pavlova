# pavlova
The pavlova library allows you to generate custom images using pixel arrays without fear of corrupted files.
Pavlova supports a variety of formats, namely:

+ .jpeg/jpg
+ .png
+ .bmp
+ .gif
+ .tiff
+ .ico
---
## Installation
1. Run `npm i pavlova` in the shell to install the module.
2. Add the following to your .js file to use the module.
```js
const pavlova = require("pavlova");
// the rest of your code...
```
---
## Functions
#### generateImage

Creates a image containing the
```js
generateImage(name, height, width);
```
*name* - a string containing the file name of the new image (including the extension)

*height* - the height of the image in pixels

*width* - the width of the image in pixels

**Examples:**
```js
generateImage("foo.jpg", 512, 512);
generateImage("barBaz.jpg", 2, 2000);
```
#### convertImage
Converts an existing file to a new image format
```js
convertImage(name, newName);
```
*name* - a string containing the file name of an existing image (including the extension)

*newName* - a string containing the name of the new image (including the extension)

**Examples:**
```js
convertImage("foo.jpg", "bar.bmp");
convertImage("example.png", "anotherExample.tiff");
```
---
## Changelog

0.0.1
+ Added convertImage function
+ Support of .bmp files

0.0.2
+ ???
