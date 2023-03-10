import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import gfm from 'remark-gfm';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			highlight: {},
			extensions: ['.md'],
			remarkPlugins: [gfm]
		})
	],

	extensions: ['.svelte',
		'.md'
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
