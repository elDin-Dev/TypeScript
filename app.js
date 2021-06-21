function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result' + num);
}
printResult(add(5, 12));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = add;
//combineValues=printResult;
//console.log(combineValues(3,58));
addAndHandle(10, 10, function (result) {
    console.log(result);
});
