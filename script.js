function openNav() {
    document.getElementById("mySideBar").style.width = "200px";
    document.getElementById("overlay").style.zIndex = 10;
    document.getElementById("overlay").style.opacity = 0.5;
}

function closeNav() {
    document.getElementById("mySideBar").style.width = "0px";
    document.getElementById("overlay").style.zIndex = 0;
    document.getElementById("overlay").style.opacity = 0;
}