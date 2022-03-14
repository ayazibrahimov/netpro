
let dropdown = document.querySelector(".dropdown")

let box = document.querySelector(".heading__content-currency-box")


let dropbox = document.querySelector(".dropbox")

let droplist = document.querySelectorAll(".dropdown-list")


box.addEventListener("click",function(){
    dropdown.classList.toggle("hidd")

})


droplist.forEach(function(li){
    li.addEventListener('click',function(e){
        dropbox.textContent=e.target.textContent 
    })
})



// scrola head






