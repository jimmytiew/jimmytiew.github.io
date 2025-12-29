const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;";
        toggleButton.style.fontSize = "50px";
    } else {
        toggleButton.innerHTML = "&#9776;";
        toggleButton.style.fontSize = "30px";
    }
});