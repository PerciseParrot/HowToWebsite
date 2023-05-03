function openNav() {
    document.getElementById("mySideBar").style.width = "200px";
    document.getElementById("overlay").style.display = "block";
    setTimeout(function() {
        document.getElementById("overlay").style.opacity = "0.3";
    }, 1);
}

function closeNav() {
    document.getElementById("mySideBar").style.width = "0px";
    document.getElementById("overlay").style.opacity = "0.0"
    setTimeout(function() {
        document.getElementById("overlay").style.display = "none";
    }, 500);
}