"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'alex' }, { age: 45 });
var mergedObj2 = merge({ name: 'alex' }, { age: 45 });
console.log(mergedObj);
console.log(mergedObj.name);
function countAndDescribe(element) {
    var descriptionText = 'No value';
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(' Hi there'));
console.log(countAndDescribe(['Sports', 'Books']));
function extractAndConvert(obj, key) {
    return "value: " + obj[key];
}
console.log(extractAndConvert({ name: 'alex' }, 'name'));
