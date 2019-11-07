if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("upcoming").style.visibility = "hidden"
    document.getElementById("caldesktop").style.visibility = "hidden"
    document.getElementById("caldesktop").className = ""
    document.getElementById("eventtrigger").style.visibility = "visible"

    document.getElementById("home-1").style.width = "90%"
    document.getElementById("home-2").style.width = "90%"
    document.getElementById("logo").innerHTML = ""
    document.getElementById("bcklogo").style.visibility = "visible"
    document.getElementById("wallpaper").style.height = "100%"

} else {
    document.getElementById("bcklogo").style.position = "absolute"
    document.getElementById("home-1").style.marginTop = "130px"
    document.getElementById("wallpaper").style.width = "100%"

}