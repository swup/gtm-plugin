import Plugin from '@swup/plugin';

export default class GtmPlugin extends Plugin {
    name = "GtmPlugin";

    mount() {
        this.swup.on('contentReplaced', event => {
            if (typeof window.dataLayer === 'object') {
                const object = {
                    'event': 'VirtualPageview',
                    'virtualPageURL': window.location.pathname + window.location.search,
                    'virtualPageTitle': document.title
                };

                window.dataLayer.push(object);

                this.swup.log(`GTM pageview (url '${object.virtualPageURL}').`);
            } else {
                console.warn('GTM is not loaded.')
            }
        })
    }
}
