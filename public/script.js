function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

/* ANIMACION SCROLL */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

/* EFECTO CURSOR ELEGANTE */
document.addEventListener("mousemove", function(e) {
    const trail = document.createElement("div");
    trail.style.position = "fixed";
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
    trail.style.width = "12px";
    trail.style.height = "12px";
    trail.style.background = "rgba(201,166,70,0.7)";
    trail.style.borderRadius = "50%";
    trail.style.pointerEvents = "none";
    trail.style.transform = "translate(-50%, -50%)";
    trail.style.zIndex = "9999";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "translate(-50%, -50%) scale(0.5)";
        trail.style.transition = "all 0.5s ease";
    }, 10);

    setTimeout(() => {
        trail.remove();
    }, 500);
});