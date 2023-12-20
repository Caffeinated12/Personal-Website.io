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

