// Write code related to Home page here 

let formele = document.querySelector("form")
let nameinp = document.getElementById("name")
let descinp = document.getElementById("desc")
let startinp = document.getElementById("start")
let endinp = document.getElementById("end")
let priorityinp = document.getElementById("priority")
formele.addEventListener("submit", (e) => {
    e.preventDefault()
    let obj = {
        name: nameinp.value,
        desc: descinp.value,
        start: startinp.value,
        end: endinp.value,
        priority: priorityinp.value
    }
    console.log(obj);
    localStorage.setItem("task-list", JSON.stringify(obj))
})