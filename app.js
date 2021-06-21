var AsTypes;
(function (AsTypes) {
    AsTypes[AsTypes["AS_NUMBER"] = 5] = "AS_NUMBER";
    AsTypes[AsTypes["AS_STRING"] = 10] = "AS_STRING";
})(AsTypes || (AsTypes = {}));
;
var ROLE;
(function (ROLE) {
    ROLE[ROLE["DEV"] = 3] = "DEV";
    ROLE["READ_ONLY"] = "a";
    ROLE[ROLE["AUTHOR"] = 9] = "AUTHOR";
})(ROLE || (ROLE = {}));
function combine(input1, input2, type) {
    //yuou can specify as many types as you want using | 
    var result;
    if ((typeof input1 === 'number') && (typeof input2 === 'number')) {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(5, 8, 'as-numbers'));
console.log(combine("a", 8, 'as-strings'));
function testType(arg) {
    console.log(arg);
}
console.log(testType(AsTypes.AS_NUMBER));
