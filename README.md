# rollup-plugin-self-resolve

## Usage

Should be used from Rollup Javascript API because passing Node JS flag --experimental-import-meta-resolve is required
https://rollupjs.org/guide/en/#differences-to-the-javascript-api

```js
// build.js

import { rollup } from 'rollup';
import plugin from 'rollup-plugin-self-resolve';

// same as rollup.config.js
const options = {
    input: './fixture.js',
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        plugin()
    ]
};

async function builder() {
    const { input, output, plugins } = options;
    
	const bundle = await rollup({ input, plugins });

	await bundle.write(output);
}

builder();

```

```sh
node --experimental-import-meta-resolve --trace-warnings ./build.js
```

## Motivation
Support https://nodejs.org/api/esm.html#esm_self_referencing_a_package_using_its_name until [rollup Resolver](https://rollupjs.org/guide/en/#configuration-files) supports it natively.

## Status
Serves my needs. Please feel free to contribute or create your own if this is insufficient.
If it's bellow your standards, please lower yours.

## Future
[] Obsolete once Rollup natively supports it
[] Improve quality