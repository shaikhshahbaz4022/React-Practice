// Write code related to dashboard page here
let lSdata = JSON.parse(localStorage.getItem("task-list")) || []


let tbody = document.querySelector('tbody')
let task_count = document.getElementById("task-count")
DisplayAllData(lSdata)


function DisplayAllData(data){
    tbody.innerHTML = ""
    task_count.textContent = data.length
    data.forEach((ele) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerText  = ele.name;

        let td2 = document.createElement("td")
        td2.innerText  = ele.desc;

        let td3 = document.createElement("td")
        td3.innerText  = ele.start;

        let td4 = document.createElement("td")
        td4.innerText  = ele.end;

        let td5 = document.createElement("td")
        td5.innerText  = ele.priority;

        let td6 = document.createElement("td")
        td6.innerText  = "Add"

        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
    });
}