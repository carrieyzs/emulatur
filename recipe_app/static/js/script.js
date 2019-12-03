function changePic(){
    console.log("test")
    var elem = document.createElement("img")
    elem.setAttribute("width", "60%")
    elem.setAttribute("height", "auto")
    elem.setAttribute("margin-top", "-25%")
    elem.src = "{% static 'images/beak_open.png' %}"
    document.getElementById("home_beak").appendChild(elem)

}