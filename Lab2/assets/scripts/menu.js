const activePage = window.location.href
const buttons = document.querySelectorAll('nav a')

window.addEventListener('DOMContentLoaded', () => {
    buttons.forEach(element => {
        if (activePage.includes(element.href)) {
            element.style.color = "Gold";
        }
    });
});