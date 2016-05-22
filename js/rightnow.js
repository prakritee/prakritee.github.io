(function () {
	var el, img, iframe;

	function init() {
		img = document.createElement('img');
		img.setAttribute('style', 'max-width: 90vw; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: 0.3s ease; opacity: 0;pointer-events:none;');
		document.body.appendChild(img);
	}

	init();

	document.addEventListener('mouseover', function (e) {
		el = e.target;

		if (!el.tagName || el.tagName !== 'IMG' && el.tagName !== 'A') return;

		if (el.tagName === 'IMG') {
			img.src = el.src;
			img.style.opacity = 1;
			img.style.transform = 'translate(-50%, -50%) scale(1)';
		}
	});

	document.addEventListener('mouseout', function (e) {
		img.style.opacity = 0;
		img.style.transform = 'translate(-50%, -50%) scale(0.9)';
	});
})();