let homePoints = 0
let guestPoints = 0

function newGame() {
    homePoints = 0 
    guestPoints = 0
    document.getElementById("home-points").textContent = homePoints
    document.getElementById("guest-points").textContent = guestPoints
}

function addHome1() {
    homePoints += 1
    document.getElementById("home-points").textContent = homePoints
}
function addHome2() {
    homePoints += 2
    document.getElementById("home-points").textContent = homePoints
}
function addHome3() {
    homePoints += 3
    document.getElementById("home-points").textContent = homePoints
}

function addGuest1() {
    guestPoints += 1
    document.getElementById("guest-points").textContent = guestPoints
}
function addGuest2() {
    guestPoints += 2
    document.getElementById("guest-points").textContent = guestPoints
}
function addGuest3() {
    guestPoints += 3
    document.getElementById("guest-points").textContent = guestPoints
}