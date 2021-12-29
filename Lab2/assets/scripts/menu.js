const activePage = document.URL.split('/').at(-1).split('.')[0];

window.onload = function() {
    const element = document.getElementsByName(activePage);
    if (element.length !== 0) {
        document.getElementsByName(activePage)[0].style.color = "Gold";
    }
}