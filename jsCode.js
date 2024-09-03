//selecting popup box,popup overlay,popup button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select cointainer,addbook,book title,book author input,book description input

var cointainer = document.querySelector(".cointainer")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("Book-title-input")
var bookAuthorinput = document.getElementById("Book-Author-input")
var bookdiscriptioniput = document.getElementById("Book-Discription-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class", "book-cointainer")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookAuthorinput.value}</h5>
            <p>${bookdiscriptioniput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    cointainer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
