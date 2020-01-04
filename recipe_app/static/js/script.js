var beakIsOpen = false

function changePic(){
    console.log(beakIsOpen)
    var elem = document.createElement("input")
    elem.setAttribute("type", "image")
    elem.setAttribute("onclick", "changePic()")
    elem.setAttribute("class", "home_img")
    elem.setAttribute("name", "beak_img")

    let closed_div = document.getElementById("home_beak")
    let open_div = document.getElementById("home_beak_open")

    if (!beakIsOpen){
        elem.src = "../static/images/beak_open.png"

        open_div.appendChild(elem)
        closed_div.remove
    }
    else{
        let div = document.getElementById("home_beak_open")
        elem.src = "../static/images/beak.png"

        div.removeChild(div.firstChild)
    }
    beakIsOpen = !beakIsOpen
}