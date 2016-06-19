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
        page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
            page.evaluate(function() {
                var stories = $("a.storylink");
                stories.each(function(index) {
                    var link = $(this);
                    console.log("" + link.text() + "  ::  " + link.attr("href"));
                });
            });
            phantom.exit(0);
        });
    } else {
      phantom.exit(1);
    }
});