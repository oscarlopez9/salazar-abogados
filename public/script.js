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

/* EFECTO CURSOR */
document.addEventListener("mousemove", function(e) {
    let trail = document.createElement("div");
    trail.style.position = "absolute";
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    trail.style.width = "8px";
    trail.style.height = "8px";
    trail.style.background = "#C9A646";
    trail.style.borderRadius = "50%";
    trail.style.pointerEvents = "none";
    trail.style.zIndex = "9999";
    trail.style.opacity = "0.7";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 300);
});