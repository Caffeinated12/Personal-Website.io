var LocalTheme = localStorage.getItem("theme");

var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

var htmlELement = document.documentElement.getAttribute("data-theme");

var button = document.getElementById("Theme_Mode");

var initial_theme = LocalTheme || (systemDark.matches ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initial_theme);

button.checked = initial_theme === "dark";

function changetheme(){
    currenttheme = document.documentElement.getAttribute("data-theme");
    newtheme = currenttheme === 'dark' ? 'light' : "dark";
    document.documentElement.setAttribute("data-theme", newtheme)
    localStorage.setItem("theme", newtheme);
    button.checked = newtheme === "dark";
}
button.addEventListener("click", changetheme);

var hamburgerbtn = document.getElementById("NavShow")
var navbar = document.getElementById("NavSelect")
var navitems = document.getElementsByClassName('NavItems')

function showNavSelect(){
    if((hamburgerbtn.checked === true) || (navbar.className === "NavStatus")){
        navbar.className += " Toggled"
        for(let i = 0; i < 3; i++){
            navitems[i].className += " Show"
        }
    }else {
        navbar.className = "NavStatus"
        for(let i = 0; i < 3; i++){
            navitems[i].className = "NavItems"
        }
    }
}

hamburgerbtn.addEventListener("click", showNavSelect)
