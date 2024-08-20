let menuOpen = false;

let sections = document.querySelectorAll('.container .check');
let navLinks = document.querySelectorAll('.nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

function openMenu(x) {
    if (menuOpen === false) {
        console.log("open");
        x.classList.toggle("change");
        document.getElementById("mobMenu").style.display = "block";
        menuOpen = true;
    }
    else {
        console.log("close");
        x.classList.toggle("change");
        document.getElementById("mobMenu").style.display = "none";
        menuOpen = false;
    }
}