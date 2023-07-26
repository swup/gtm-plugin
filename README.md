# Swup GTM Plugin

A [swup](https://swup.js.org) plugin for integrating Google Tag Manager.

- Trigger a custom event after each page change to associate with a page view within GTM
- This event is not triggered on intial load, so the first page view must be triggered elsewhere
- The event is a `VirtualPageview` with `virtualPageURL` and `virtualPageTitle` properties

Simplified code run by this plugin on the `page:view` hook:

```js
window.dataLayer.push({
  event: 'VirtualPageview',
  virtualPageURL: window.location.pathname + window.location.search,
  virtualPageTitle: document.title
});
```

## Installation

Install the plugin from npm and import it into your bundle.

```bash
npm install @swup/gtm-plugin
```

```js
import SwupGtmPlugin from '@swup/gtm-plugin';
```

Or include the minified production file from a CDN:

```html
<script src="https://unpkg.com/@swup/gtm-plugin@2"></script>
```

## Usage

To run this plugin, include an instance in the swup options.

```javascript
const swup = new Swup({
  plugins: [new SwupGtmPlugin()]
});
```
