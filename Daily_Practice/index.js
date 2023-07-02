// learning closures
// function outer() {
//   let vari = "hello"
//   function Inner() {
//     console.log(vari)
//   }
//   return Inner
// }
// let temp = outer()
// console.log(temp())

// function Multiply(x) {
//   return function(y) {
//    return (x * y)
//   }
// }
// var newf = Multiply(2)
// console.log(newf(5))

class Animal{
  constructor(name,age){
    this.name = name;
    this.age = age
  }
}
// let dog = new Animal("Puppu",32)
// console.log(dog)
class cat extends Animal{
  constructor(name,age ,address){
    super(name,age)
    this.address = address
  }
}
let catty = new cat("dolly",32,"UK")
console.log(catty)