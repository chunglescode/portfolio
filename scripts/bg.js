document.addEventListener("DOMContentLoaded", ()=> {
    const starsContainer = document.querySelector(".stars");
    const starsContainer1 = document.querySelector(".stars1");
    const numStars = 1000;
    const numStars1 = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() *100}vh`;
        star.style.left = `${Math.random() *100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }

    for (let i = 0; i < numStars1; i++) {
        const star1 = document.createElement("div");
        star1.classList.add("star1");
        star1.style.top = `${Math.random() *100}vh`;
        star1.style.left = `${Math.random() *100}vw`;
        star1.style.animationDuration = `${Math.random() * 5 + 2}s`;
        star1.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer1.appendChild(star1);
    }

    // Moving stars

    const movingStarsContainer = document.querySelector(".moving-stars");
    const numMovingStars = 5;

    for (let i = 0; i < numMovingStars; i++) {
        const movingStar = document.createElement("div");
        movingStar.classList.add("moving-star");
        movingStar.style.top = `${Math.random() * 100}vh`;
        movingStar.style.left = `${Math.random() * 100}vw`;
        movingStar.style.animationDuration = `${Math.random() * 5 + 5}s`;
        movingStarsContainer.appendChild(movingStar);
    }
})