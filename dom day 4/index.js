function getfromsessionstorage(key){0
    return sessionStorage.getItem(key)
}


function getcurrenturl (){
    return window.location.href
}

function seturl(){
    window.location.href = url
}

function opennewwindow(url){
    window.open(url)
}