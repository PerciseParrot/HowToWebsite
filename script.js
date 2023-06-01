function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("overlay").style.display = "block";
    setTimeout(function() {
        document.getElementById("overlay").style.opacity = "0.3";
    }, 1);
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("overlay").style.opacity = "0.0"
    setTimeout(function() {
        document.getElementById("overlay").style.display = "none";
    }, 500);
}

window.onscroll = function() {
    if (document.body.scrollTop > 50 ) {
        document.getElementById("headbar").style.height = "0px";
    } else {
        document.getElementById("headbar").style.height = "100px";
    }
}