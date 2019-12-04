var beakIsOpen = false

function changePic(){
    console.log(beakIsOpen)
    var elem = document.createElement("img")
    elem.setAttribute("onclick", "changePic()")
    elem.setAttribute("class", "home_img")
    elem.src = "../static/images/beak_open.png"

    var div = document.getElementById("home_beak_open")
    if (!beakIsOpen){
        div.appendChild(elem)
    }
    else{
        div.removeChild(div.firstChild)
    }
    beakIsOpen = !beakIsOpen
}