const burger = document.querySelector(".burger")

const burgerList = document.querySelector(".gamburger__list")

const list = document.querySelectorAll("#list li")

const items = document.querySelectorAll("#items p")

const body = document.querySelector("body")

const empty = document.querySelector(".empty")

const overlay = document.querySelector(".overlay")



burger.addEventListener("click", function () {
    burgerList.classList.toggle("open")
    burger.classList.toggle("good")
    body.classList.toggle("hidden")
    overlay.classList.toggle("hide")

    list.forEach(function (e) {
        e.style.opacity = "1"

    })

    items.forEach(function (e) {
        e.style.opacity = "1"
    })








})