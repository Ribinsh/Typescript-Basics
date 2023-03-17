

enum Size {Small=10 , Medium , Large}
let mySize = Size.Small

console.log(mySize);


 enum Ages {Child = "1-12 ", Tennage = "12-18" , Adult = "18-35" , MiddleAge = "35-60" , Senior=  "Above 60"}
let myAge = Ages.Adult;
console.log(myAge);



// Add const in front of enum, compiler will generate more optimised code

const enum Agess {Child = "1-12 ", Tennage = "12-18" , Adult = "18-35" , MiddleAge = "35-60" , Senior=  "Above 60"}
let hisAge = Agess.MiddleAge;
console.log(hisAge);


