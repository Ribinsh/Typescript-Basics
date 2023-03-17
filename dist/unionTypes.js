"use strict";
function weightCalculation(weight) {
    if (typeof weight === "number")
        return weight * 2;
    else
        return parseInt(weight) * 2;
}
console.log(weightCalculation("50"));
console.log(weightCalculation(50));
