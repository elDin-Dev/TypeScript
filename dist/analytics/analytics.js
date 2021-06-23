"use strict";
var logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    logged = "alex";
}
sendAnalytics("the data...");
