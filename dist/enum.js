"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 11] = "Medium";
    Size[Size["Large"] = 12] = "Large";
})(Size || (Size = {}));
let mySize = Size.Small;
console.log(mySize);
var Ages;
(function (Ages) {
    Ages["Child"] = "1-12 ";
    Ages["Tennage"] = "12-18";
    Ages["Adult"] = "18-35";
    Ages["MiddleAge"] = "35-60";
    Ages["Senior"] = "Above 60";
})(Ages || (Ages = {}));
let myAge = Ages.Adult;
console.log(myAge);
let hisAge = "35-60";
console.log(hisAge);
