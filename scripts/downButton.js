let opacity = 0;
let intervalID = 0;
let userHasScrolled = false;
let visibilityCheck = false;
let afterHover = false;

window.addEventListener("scroll", scrollCheck);

function scrollCheck() {
    console.log("check");
    userHasScrolled = true;
    window.removeEventListener("scroll", scrollCheck);
}

window.onload = setTimeout(fadeIn, 5000);

document.getElementById("downButton").addEventListener("mouseover", hoverCheck);

function hoverCheck() {
    console.log("hover check");
    if (document.getElementById("downButton").classList.contains("bounce")) {
        document.getElementById("downButton").classList.remove("bounce");
        afterHover = true;
    }
}

function fadeIn() {
    if (userHasScrolled === false) {
        
        setInterval(show, 50);
    }
}

function show() {
    if (userHasScrolled === false) {
        let downButton = document.getElementById("downButton");
        opacity = Number(window.getComputedStyle(downButton).getPropertyValue("opacity"));

        if (opacity < 1) {
            opacity += 0.05;
            downButton.style.opacity = opacity;
            
            if (visibilityCheck === false) {
                downButton.style.visibility = "visible";
                visibilityCheck = true;
            }
        }
        else {
            clearInterval(intervalID);
            setTimeout(promptUser, 5000);

        }
    }
    else {
        setInterval(hide, 100);
    }
}

function hide() {
    let downButton = document.getElementById("downButton");
    opacity = Number(window.getComputedStyle(downButton).getPropertyValue("opacity"));

    if (opacity > 0) {
        opacity -= 0.05;
        downButton.style.opacity = opacity;
        
        if (visibilityCheck === true && opacity === 0) {
            downButton.style.visibility = "hidden";
            visibilityCheck = false;
        }
    }
    else {
        clearInterval(intervalID);
    }
}

function promptUser() {
    if (userHasScrolled === false) {
        if (afterHover === false) {
            document.getElementById("downButton").classList.add("bounce");
        }
    }
    else {
        setInterval(hide, 100);
    }
}

/* What happens when you click */ 
document.getElementById("downButton").addEventListener("click", hideArrow);

function hideArrow() {
    window.location.href = "#contact";
    setTimeout(hideQuickly, 500);

    function hideQuickly() {
     document.getElementById("downButton").style.visibility = "hidden";
    }
}