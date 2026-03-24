document.addEventListener("mousemove", function(e) {
    let trail = document.createElement("div");
    trail.style.position = "absolute";
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    trail.style.width = "10px";
    trail.style.height = "10px";
    trail.style.background = "rgba(201,166,70,0.7)";
    trail.style.borderRadius = "50%";
    trail.style.pointerEvents = "none";
    trail.style.transition = "all 0.5s ease";
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.style.opacity = "0";
        trail.style.transform = "scale(2)";
    }, 10);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
});

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);