let home = document.querySelector(".home")
let navbar = document.querySelector(".navbar")
let a = document.querySelectorAll(" .navbar .container ul li a")
let logo = document.querySelector(" .navbar .container .navbar-brand")
let btn = document.getElementById('up')

window.onscroll = function () {
    if (window.scrollY > home.scrollHeight) {

        navbar.style.cssText = `background:white`
        a.forEach(function (e) {
            e.style.color = "black"
        })
        logo.style.background = "black";
        btn.style.cssText = "display:block;"
    }
    if (window.scrollY < home.scrollHeight) {

        navbar.style.cssText = `background:transparent`
        a.forEach(function (e) {
            e.style.color = "#fff"
        })
        logo.style.background = "transparent";
           btn.style.cssText = "display:none;"
    }
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    }
    )
}
    
// setting
let gearSetting = document.getElementById("gear")
let main_setting = document.getElementById("main-setting")
var root = document.querySelector(":root")

console.log(root);
gearSetting.onclick = function () {
    gearSetting.classList.toggle("fa-spin")
    if (gearSetting.classList.contains("fa-spin")) {
        gearSetting.style.cssText = "left:16%;"
        main_setting.style.cssText = "display:flex !important"
    } else {
        gearSetting.style.cssText = "left:50%;"
        main_setting.style.cssText = "display:none !important"
    }
}