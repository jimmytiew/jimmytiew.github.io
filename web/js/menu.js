const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // 变成大叉
        toggleButton.style.fontSize = "50px"; // 这里设置大叉的大小（比如 50px）
    } else {
        toggleButton.innerHTML = "&#9776;"; // 变回三条杠
        toggleButton.style.fontSize = "30px"; // 恢复三条杠的大小（比如 30px）
    }
});