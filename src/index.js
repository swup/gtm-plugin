import Plugin from '@swup/plugin';

export default class SwupGtmPlugin extends Plugin {
	name = 'SwupGtmPlugin';

	mount() {
		this.on('page:view', this.trackPageview);
	}

	trackPageview() {
		if (typeof window.dataLayer !== 'object') {
			console.warn('GTM is not loaded on the page');
			return;
		}

		const url = window.location.pathname + window.location.search;
		const title = document.title;

		window.dataLayer.push({
			event: 'VirtualPageview',
			virtualPageURL: url,
			virtualPageTitle: title
		});

		this.swup.log(`GTM page view: ${url}`);
	}
}
