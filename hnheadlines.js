// Get the Hacker News headlines and links and print them to the console
//
// To run: `phantomjs hnheadlines.js`

"use strict";
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open("https://news.ycombinator.com", function(status) {
    if (status === "success") {
        page.evaluate(function() {
            var nodeList = document.getElementsByClassName("storylink");
            for (var i = 0; i < nodeList.length; i++) {
                var link = nodeList[i];
                if ("a" === link.tagName.toLowerCase()) {
                    console.log("" + link.textContent + "  ::  " + link.getAttribute("href"));
                }
            }
        });
        phantom.exit(0);
    } else {
      phantom.exit(1);
    }
});