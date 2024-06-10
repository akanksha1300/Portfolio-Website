document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navRight = document.querySelector("nav .right");

    menuIcon.addEventListener("click", () => {
        navRight.classList.toggle("active");
    });
});