var activePage = document.URL.split('/').at(-1).split('.')[0];
console.log(activePage);

window.onload = function() {
    var element = document.getElementsByName(activePage);
    if (element.length != 0) {
        document.getElementsByName(activePage)[0].style.color = "Gold";
    }
}

document.addEventListener("mouseout", function(event) {
    if (event.target.type == "menuPoint" && event.target.getAttribute('name') != activePage) {
        document.getElementsByName(event.target.name)[0].style.color = "";
    }
}, false);

document.addEventListener("mouseover", function(event) {
    if (event.target.type == "menuPoint" && event.target.getAttribute('name') != activePage) {
        document.getElementsByName(event.target.name)[0].style.color = "yellow";
    }
}, false);

(function() {
    console.log("Hello world!")
    var now = new Date();
    startS = new Date(performance.timing.requestStart).getSeconds();
    startMS = new Date(performance.timing.requestStart).getMilliseconds();
    endS = now.getSeconds();
    endMS = now.getMilliseconds();
    res = Math.abs(endS*1000 + endMS - startS*1000 - startMS);
    console.log(endS, endMS, startS, startMS)
    var stats = document.createElement("p");
    stats.textContent = "Page load time is " + res + " ms";
    document.getElementsByTagName("footer")[0].appendChild(stats);
})();
      