### **__*ALERT USER: Please go to [pavlova.now.sh/_src](https://pavlova.now.sh/_src) to view an open source and up to date version of all source code. The documentation below, however, is still up to date.*__**

# pavlova
The pavlova library allows you to get images from custom Google image searches.

## Installation
1. Run `npm i pavlova` in the shell to install the module.
2. Add the following to the top of your file your file.
```js
const pavlova = require('pavlova');
// the rest of your code...
```

## Usage
```js
var response = pavlova.search(search);
```
*search* - an object containing query data

```JSON
{
  "query": "your search query",
  "output": "an output file (optional)",
  "size": "size: huge, icon, large, medium, small, xlarge or xxlarge",
  "color": "color: color, gray or mono",
  "filetype": "filetype: the extension of an image type",
  "safeSearch": "safe search: high, medium or off"
}
```

*response* - an object containing information about the image returned

```JSON
{
  "url": "url of the image",
  "page": "url of the page where the image originated",
  "title": "title of the page where the image originated",
  "height": "the image's height in pixels",
  "width": "the image's width in pixels",
  "written": "whether the image was written to the file or not"
}
```

## Examples
```js
// example 1
var res = pavlova.search({
  "query": "Hello, World!",
  "output": "helloworld.png"
});

// example 2
var res2 = pavlova.search({
  "query": "uhfaiuharguguaierg",
  "output": "keymash.jpg"
});
// res2.written is false because no search results were returned

// example 3
var res3 = pavlova.search({
  "query": "foo bar baz"
});
// res2.written is false because no query was supplied
```

## Changelog
**0.1.0**
+ Added `search(search)` function
**0.1.1**
+ README.md
