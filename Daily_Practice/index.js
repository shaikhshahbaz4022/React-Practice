// learning closures
function outer() {
  let vari = "hello"
  function Inner() {
    console.log(vari)
  }
  return Inner
}
let temp = outer()
console.log(temp())

function Multiply(x) {
  return function(y) {
    console.log(x * y)
  }
}
var newf = Multiply(2)
console.log(newf(5))