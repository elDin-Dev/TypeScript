"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'alex' }, { age: 45 });
console.log(mergedObj);
console.log(mergedObj.name);
