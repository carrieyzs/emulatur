var beakIsOpen = false

function changePic(){
    // Make a base input element to switch into
    var elem = document.createElement("input")
    elem.setAttribute("type", "image")
    elem.setAttribute("onclick", "changePic()")
    elem.setAttribute("class", "home_img")
    elem.setAttribute("name", "beak_img")

    let open_div = document.getElementById("home_beak_open")

    if (!beakIsOpen){
        elem.src = "../static/images/beak_open.png"
        elem.id = "open_beak"

        open_div.appendChild(elem) 
    }
    else{
        elem.src = "../static/images/beak.png"
        elem.id = "closed_beak"

        open_div.removeChild(document.getElementById("open_beak"));
        
    }
    beakIsOpen = !beakIsOpen
}