(function() {
	const launchTimestamp = Date.now();

	window.addEventListener('load', () => {
		const loadTime = Date.now() - launchTimestamp;
		const stats = document.createElement("p");
		stats.textContent = "Page load time is " + loadTime + " ms";
		document.getElementsByTagName("footer")[0].appendChild(stats);
	});
})();
