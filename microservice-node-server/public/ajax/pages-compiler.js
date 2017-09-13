var fs = require('fs');
var body = {
  "success": true,
  "data": {
    "routerInfo": {
      "homepage": "/home",
      "pages": {
        "/home": {
          "id": "homepage",
          "template": "",
          "useCachedData": false
        },
        "/calendar": {
          "id": "calendar",
          "viewParams": {
            "name": "Ryan"
          },
          "template": "",
          "useCachedData": false
        },
        "/bios": {
          "id": "bios",
          "viewParams": {
            "name": "Joaquin"
          },
          "template": "",
          "useCachedData": false
        }
      }
    }
    
  }
}

fs.readFile('./homepage.html', 'utf8', function(oErr, sText) {
    var oneline = sText.replace(/\n/g, '');
    body.data.routerInfo.pages['/home'].template = oneline;

    fs.readFile('./calendar.html', 'utf8', function(oErr, sText) {
      var cal = sText.replace(/\n/g, '');
      body.data.routerInfo.pages['/calendar'].template = cal;

      fs.readFile('./bios.html', 'utf8', function(oErr, sText) {
        var bios = sText.replace(/\n/g, '');
        body.data.routerInfo.pages['/bios'].template = bios;


        fs.writeFile("hiking-club-pages.json", JSON.stringify(body), function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        }); 
      });
    });


});













