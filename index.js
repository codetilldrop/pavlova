const request = require('request');
const { exec } = require('child_process');
const fs = require('fs');

function search(search, callback) {
  // user's query (if not specified, undefined)
  var q = {
    "q": search.query,
    "searchType": "image",
    "imgColorType": search.color,
    "imgSize": search.imgSize,
    "imgType": search.filetype,
    "safe": search.safeSearch,
    "key": "AIzaSyA0QKjNkj4bHMfSXUTw7chK3FqrhIIfHOE",
    "cx": "011392782720410225953:ykizpm_tl9i"
  };

  // query url
  var url = 'https://www.googleapis.com/customsearch/v1';
  var chunks = [];

  // sends the query
  request.get({ url: url, qs: q })
  .on('error', function (err) {
    var response = {
      "written": false
    };
    console.error("ERROR: failed to connect to API server. Have you tired checking your internet connectivity?");
  }).on('data', function (data) {
    // add data
    chunks.push(data);
  }).on('end', function () {
    // parse result
    var result = JSON.parse(Buffer.concat(chunks));

    if (search.output != undefined) {
      stream = fs.createWriteStream(search.output);

      // get the image
      if (result.items != undefined) {
        request.get(result.items[0].link)
        .on('error', function (err) {
          var response = {
            "written": false
          };
          console.error("ERROR: no source file found as it has probably been moved.");
        }).on('data', function (data) {
          stream.write(data, function () {});
        }).on('end', function () {
          var response = {
            "url": result.items[0].link,
            "page": result.items[0].image.contextLink,
            "title": result.items[0].title,
            "height": result.items[0].image.height,
            "width": result.items[0].image.width,
            "written": true
          };
          stream.end();
        });
      } else {
        var response = {
          "written": false
        };
        console.error("ERROR: no search results returned. Have you tried using less obscure search terms?");
      }
    } else {
      var response = {
        "url": result.items[0].link,
        "page": result.items[0].image.contextLink,
        "title": result.items[0].title,
        "height": result.items[0].image.height,
        "width": result.items[0].image.width,
        "written": false
      };
    }

  });

  return response;
}
