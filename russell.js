{

	/* jshint -W030 */
	'use strict';

	let links = document.querySelectorAll('[data-scroll]');
	let sections = {};
	let elements = {};

	/**
	 * Scroll over time to a certain point on the page
	 *
	 * @see http://stackoverflow.com/a/8918062
	 */
	let scrollTo = (element, to, duration) => {
		'use strict';

		if (duration <= 0) return;
		var difference = to - element.scrollTop;
		var perTick = difference / duration * 10;

		setTimeout(() => {
			element.scrollTop = element.scrollTop + perTick;
			if (element.scrollTop === to) return;
			scrollTo(element, to, duration - 10);
		}, 10);
	};

	let onClick = event => {
		'use strict';

		let link = event.currentTarget;
		let anchor = link.getAttribute('data-scroll') || link.getAttribute('href');
		let element = document.getElementById(anchor);
		let offset = parseInt(event.currentTarget.getAttribute('data-offset') || 0, 10);

		scrollTo(document.body, sections[element.id] - offset, 150);
	};

	let onScroll = () => {
		'use strict';

		let scrollPosition = document.body.scrollTop + (window.innerHeight / 2);

		for (let key in sections) {
			if (sections.hasOwnProperty(key)) {
				if (scrollPosition > sections[key]) {
					document.querySelector('.current').classList.remove('current');
					document.querySelector('[data-scroll="' + key  + '"]').classList.add('current');
				}
			}
		}
	};

	Array.prototype.forEach.call(links, (link) => {
		'use strict';

		let element = document.getElementById(link.getAttribute('data-scroll'));
		elements[element.id] = element;

		link.addEventListener('click', onClick);
	});

	for (let key in elements) {
		if (elements.hasOwnProperty(key)) {
			sections[key] = elements[key].offsetTop;
		}
	}

	window.addEventListener('scroll', onScroll);
}