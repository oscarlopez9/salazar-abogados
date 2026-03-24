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

/* NUMEROS ANIMADOS */
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 20);
        } else {
            counter.innerText = target;
        }
    });
};

/* ACTIVAR CUANDO APARECE EN PANTALLA */
window.addEventListener("scroll", function() {
    const section = document.querySelector(".numbers");
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (position < screenPosition) {
        animateCounters();
    }
});