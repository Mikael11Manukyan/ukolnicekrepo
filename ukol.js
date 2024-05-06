let ukoly = document.querySelectorAll("main li")

for (let ukol of ukoly) {
    ukol.className = "nesplneno"

    let splneno = document.createElement("button")
    splneno.innerHTML = "splnit"
    ukol.appendChild(splneno)

    let rozpracovat = document.createElement("button")
    rozpracovat.innerHTML = "rozpracovat"
    ukol.appendChild(rozpracovat)

    let resetovat = document.createElement("button")
    resetovat.innerHTML = "resetovat"
    ukol.appendChild(resetovat)

    splneno.addEventListener("click", () => {
        ukol.className = "splneno"
    })

    resetovat.addEventListener("click", () => {
        ukol.className = "nesplneno"
    })

    rozpracovat.addEventListener("click", () => {
        ukol.className = "rozpracovano"
    })
}

document.querySelector("button#rbttn1").addEventListener("click", () => {
    for (let ukol of ukoly) {
        if(ukol.className == "splneno"){
            ukol.style.display = ""
        } else {
            ukol.style.display = "none"
        }
    }
})

document.querySelector("button#rbttn2").addEventListener("click", () => {
    for (let ukol of ukoly) {
        if(ukol.className == "rozpracovano"){
            ukol.style.display = ""
        } else {
            ukol.style.display = "none"
        }
    }
})

document.querySelector("button#rbttn3").addEventListener("click", () => {
    for (let ukol of ukoly) {
        if(ukol.className == "nesplneno" || ukol.className == "rozpracovano"){
            ukol.style.display = ""
        } else {
            ukol.style.display = "none"
        }
    }
})

document.querySelector("button#rbttn4").addEventListener("click", () => {
    for (let ukol of ukoly) {
            ukol.style.display = ""
    }
})