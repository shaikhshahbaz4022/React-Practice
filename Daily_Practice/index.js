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

// class Animal{
//   constructor(name,age){
//     this.name = name;
//     this.age = age
//   }
// }
// // let dog = new Animal("Puppu",32)
// // console.log(dog)
// class cat extends Animal{
//   constructor(name,age ,address){
//     super(name,age)
//     this.address = address
//   }
// }
// let catty = new cat("dolly",32,"UK")
// console.log(catty)

//Q.N0:2 ->
// for(var i=0;i<3;i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }
// 3 3 3 
// for(let i=0;i<3;i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }

//  0 1 2
// console.log(this)
// class handleThis {
//   constructor(name) {
//     this.name = name
//     console.log(this.name)
//   }
// }

// let a=10;
// console.log(a);
// let res = ++a
// console.log(a)
// console.log(res);
// console.log(res);

// function nameinp(name){
//   this.name = name;
// }
// let f = new nameinp("shahbaz")
// console.log(f)

//Not Possible is not a constructor
// let nameinp=(name)=>{
//   this.name = name
// }
// let f = new nameinp("shahbaz")
// console.log(f)

//call Method to manipulate this keyword
// function Greet(name){
//   console.log(`Hello ${name} , my name is ${this.name}`);

// }
// let person= {name:"shahbaz"}

// Greet.call(person , "jhon")

// function greet(name,email){
  // console.log(arguments)
  // console.log(typeof arguments);
  // console.log(arguments.length);
  //  arguments.forEach((ele)=>{
  //     console.log(ele)
  // })
  // for(let i=0;i<arguments.length;i++){
  //   console.log(arguments[i]);
  // }
  // console.log(newarr);
// }
// greet("shahbaz",'shahbaz')

