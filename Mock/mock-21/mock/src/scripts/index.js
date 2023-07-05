//add your js code here
let prev = document.getElementById("prev")
let next = document.getElementById('next')
let pageNo = 1

FetchAndDisplay()
async function FetchAndDisplay() {
    try {
        let res = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${pageNo}`)

        let data = await res.json()
        console.log(data);
        Displaydata(data)
      
    } catch (error) {
        console.log(error);
    }
}


prev.addEventListener("click", () => {
    if (pageNo == 1) {

        return
    }
    pageNo--
    FetchAndDisplay()
})


  


let tbody = document.querySelector("tbody")
function Displaydata(data) {
    tbody.innerHTML = ""
    let newdata = data.data.forEach((ele) => {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.textContent = ele.competition

        let td2 = document.createElement("td")
        td2.textContent = ele.year

        let td3 = document.createElement("td")
        td3.textContent = ele.round

        let td4 = document.createElement("td")
        td4.textContent = ele.team1

        let td5 = document.createElement("td")
        td5.textContent = ele.team2

        let td6 = document.createElement("td")
        td6.textContent = ele.team1goals

        let td7 = document.createElement("td")
        td7.textContent = ele.team2goals

        tr.append(td1, td2, td3, td4, td5, td6, td7)
        tbody.append(tr)



    });
    next.addEventListener("click", () => {
        if (pageNo==data.total_pages) return
            pageNo++
        FetchAndDisplay()
    })

}

// competition
// :
// "UEFA Champions League"
// round
// :
// "GroupH"
// team1
// :
// "Barcelona"
// team1goals
// :
// "2"
// team2
// :
// "AC Milan"
// team2goals
// :
// "2"
// year
// :
// 2011