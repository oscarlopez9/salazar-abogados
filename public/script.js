function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

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
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 300);
});