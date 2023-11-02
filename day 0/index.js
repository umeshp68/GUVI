const allitems =document.querySelectorAll("li")

function clickfunc(){
    allitems[0].setAttribute("class", "firstli")
    // allitems[1].style.backgroundColor="lightcoral"
    allitems[0].value=4
    
    allitems[0].textContent="umesh"
}

function changefunc(){
    allitems[0].removeAttribute("class", "firstli")
    // allitems[1].style.backgroundColor="white"
    allitems[0].value=1
    allitems[0].textContent="listitem 1"
}
