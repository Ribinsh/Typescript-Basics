
//...........................return type........
function tax (income:number , year:number ) : number {
    let result = income * 1.3 * year

    return result
}

tax(70000, 2014)  // have to call the function with passing exact number of parameter 