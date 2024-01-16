let LocalTheme = localStorage.getItem("theme");

let systemDark = window.matchMedia("(prefers-color-scheme: dark)");

let htmlELement = document.documentElement.getAttribute("data-theme");

let button = document.getElementById("ThemeMode");
let button_2 = document.getElementById("ThemeModeS")

let initial_theme = LocalTheme || (systemDark.matches ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initial_theme);

button_2.checked = button.checked = initial_theme === "dark";

function changetheme(){
    currenttheme = document.documentElement.getAttribute("data-theme");
    newtheme = currenttheme === 'dark' ? 'light' : "dark";
    document.documentElement.setAttribute("data-theme", newtheme)
    localStorage.setItem("theme", newtheme);
    button_2.checked = button.checked = newtheme === "dark";
}

button.addEventListener("click", changetheme);
button_2.addEventListener("click", changetheme);

let HamburgerButton = document.getElementById("NavStatus");
let Body = document.getElementById("BodyDiv");
let NavItems = document.getElementsByClassName("NavItems")

function ShowNavItems(){
    if(HamburgerButton.checked){
        for(let i=0; i < 5; i++){
            if(i === 4){
                NavItems[i].className += " Show"
            }else{
                NavItems[i].className += " Show"
            }
        }
        Body.className += " Fall"
    }else{
        for(let i=0; i < 5; i++){
            if(i === 4){
                NavItems[i].className = "switch NavItems"
            }else{
                NavItems[i].className = "NavItems"
            }
        }    
        Body.className = "Body"
    }
}

HamburgerButton.addEventListener("click", ShowNavItems)

let skillbutton = document.getElementById("Skills")
let Icons = document.getElementsByClassName("AboutIcons")[0]

function ShowSkills(){
    if(skillbutton.checked){
        Icons.className += " Show"
    }
    else{
        Icons.className = "AboutIcons"
    }
}

skillbutton.addEventListener("click", ShowSkills)