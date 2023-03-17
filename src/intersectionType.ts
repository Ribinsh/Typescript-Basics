type name = {
    name: string
}

type age = {
    age:number
}

type data = name & age

let student : data = {
    name: "ribin",
    age:24
}

console.log(student);
