if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("upcoming").style.visibility = "hidden"
    document.getElementById("caldesktop").style.visibility = "hidden"
    document.getElementById("caldesktop").className = ""
    document.getElementById("eventtrigger").style.visibility = "visible"

    document.getElementById("home-1").style.width = "90%"
    document.getElementById("home-2").style.width = "90%"
    document.getElementById("logo").innerHTML = "<b>BC KERZERS</b>"
}