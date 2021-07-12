"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Alex');
textStorage.addItem('Vicente');
textStorage.removeItem('Alex');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
