const windowHeaders = document.querySelectorAll('.window-header');

let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let currentWindow = null;

document.addEventListener("mousedown", (e) => {
    const header = e.target.closest('.window-header');
    if (!header) return;
    currentWindow = header.closest('.window');
    isDragging = true;
    offsetX = e.clientX - currentWindow.offsetLeft;
    offsetY = e.clientY - currentWindow.offsetTop;
    currentWindow.style.cursor = "grabbing";
})
    
document.addEventListener("mousemove", (e) => {
    if (!isDragging && !currentWindow) return;
    currentWindow.style.left = (e.clientX - offsetX) + "px";
    currentWindow.style.top = (e.clientY - offsetY) + "px";
});
    
document.addEventListener("mouseup", () => {
    if (!currentWindow) return;
    isDragging = false;
    if (currentWindow) {
        currentWindow.style.cursor = "default";
        currentWindow = null;
    }
});